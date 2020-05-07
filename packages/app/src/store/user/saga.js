import { takeLatest, call, put } from 'redux-saga/effects';
import { StorageService, AuthService } from '../../services';

import { INIT_USER, LOGIN } from './constants';
import { APP_TOKEN, PROFILE, UNKNOWN } from '../../constants';
import {
  initSuccess,
  loginSuccess,
  loginLoading,
  loginFailure
} from './actions';
import { initialProfile } from './reducer';

function* initUser() {
  try {
    yield AuthService.init();
    const appToken = yield call(StorageService.getItem, APP_TOKEN);

    if (!appToken) {
      const { token } = yield AuthService.createAppSession();
      yield call(StorageService.setItem, APP_TOKEN, token);
      yield put(initSuccess(token, initialProfile));
    } else {
      const profile = yield call(StorageService.getJSON, PROFILE);

      if (!profile) {
        yield put(initSuccess(appToken, initialProfile));
      } else {
        yield put(initSuccess(appToken, profile));
      }
    }
  } catch (e) {
    console.error(e);
  }
}

function* loginUser({ payload }) {
  yield put(loginLoading());
  try {
    const credentials = { ...payload };
    const { id, token, user } = yield AuthService
      .login(credentials)
      .catch(e => {
        console.error(e);
      });
    const profile = {
      id,
      userToken: token,
      login: user.login,
      fullName: user.fullName || UNKNOWN
    };

    yield call(StorageService.setJSON, PROFILE, profile);
    yield put(loginSuccess(profile));
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}

export default [
  takeLatest(INIT_USER, initUser),
  takeLatest(LOGIN, loginUser)
];
