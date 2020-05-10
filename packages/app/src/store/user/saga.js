import { takeLatest, call, put } from 'redux-saga/effects';
import { StorageService, AuthService } from '../../services';

import { INIT_USER, LOGIN, UPDATE_USER } from './constants';
import { userKeys, UNKNOWN } from '../../constants';
import {
  initSuccess,
  loginSuccess,
  loginLoading,
  loginFailure,
  updateUserSuccess,
} from './actions';
import { initialProfile } from './reducer';

const isValid = date => (Date.now() - Date.parse(date)) / 60000 < 120;

function* initUser() {
  try {
    yield AuthService.init();
    const profile = yield call(StorageService.getJSON, userKeys.PROFILE);

    if (!profile) {
      const appToken = yield call(StorageService.getItem, userKeys.APP_TOKEN);
      const updatedAt = yield call(StorageService.getItem, userKeys.UPDATED_AT);

      if (!appToken || !updatedAt || !isValid(updatedAt)) {
        const {
          token,
          updated_at: updatedAt,
        } = yield AuthService.createAppSession();
        yield call(StorageService.setItem, userKeys.UPDATED_AT, updatedAt);
        yield call(StorageService.setItem, userKeys.APP_TOKEN, token);
        yield put(initSuccess(token, initialProfile));
      } else {
        yield put(initSuccess(appToken, initialProfile));
      }
    } else {
      yield put(initSuccess(null, profile));
    }
  } catch (e) {
    console.error(e);
  }
}

function* loginUser({ payload }) {
  yield put(loginLoading());
  try {
    const credentials = { ...payload };
    const { token, user } = yield AuthService.login(credentials).catch(e => {
      console.error(e);
    });
    const profile = {
      id: user.id,
      userToken: token,
      login: user.login,
      fullName: user.fullName || UNKNOWN,
    };

    yield call(StorageService.setJSON, userKeys.PROFILE, profile);
    yield put(loginSuccess(profile));
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}

function* updateUser({ payload }) {
  try {
    const { user } = yield AuthService.update(payload.updatedProfile).catch(
      e => {
        console.error(e);
      },
    );

    const updatedProfile = {
      fullName: user.full_name || UNKNOWN,
      interests: user.user_tags.split(','),
    };

    yield put(updateUserSuccess(updatedProfile));
  } catch (e) {
    console.error(e);
  }
}

export default [
  takeLatest(INIT_USER, initUser),
  takeLatest(LOGIN, loginUser),
  takeLatest(UPDATE_USER, updateUser),
];
