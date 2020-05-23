import { takeLatest, call, put, select } from 'redux-saga/effects';
import { StorageService, AuthService } from '../../services';

import { INIT_USER, LOGIN, LOGOUT } from './constants';
import { userKeys, UNKNOWN } from '../../constants';
import {
  initSuccess,
  loginSuccess,
  loginLoading,
  loginFailure,
  logoutSuccess,
  logoutFailure
} from './actions';
import { initialProfile } from './reducer';
import AsyncStorage from '@react-native-community/async-storage';

const isValid = date => (Date.now() - Date.parse(date)) / 60000 < 120;

function* initUser() {
  try {
    yield AuthService.init();
    const profile = yield call(StorageService.getJSON, userKeys.PROFILE);

    if (!profile) {
      const appToken = yield call(StorageService.getItem, userKeys.APP_TOKEN);
      const updatedAt = yield call(
        StorageService.getItem,
        userKeys.UPDATED_AT
      );

      if (!appToken || !updatedAt || !isValid(updatedAt)) {
        const {
          token,
          updated_at: updatedAt
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

function* loginFacebook({ provider, login: token }) {
  const credentials = {
    provider,
    keys: { token }
  };

  const session = yield AuthService
    .login(credentials)
    .catch(e => console.error(e));
  
  return {
    id: session.user_id,
    userToken: session.token,
    fullName: UNKNOWN,
    login: UNKNOWN,
    provider
  };
}

function* loginEmailPass({ login, password }) {
  const credentials = {
    login,
    password
  };
  
  const { token, user } = yield AuthService
    .login(credentials)
    .catch(e => console.error(e));

  return {
    id: user.id,
    userToken: token,
    login: user.login,
    fullName: UNKNOWN,
    provider: null
  };
}

function* loginUser({ payload }) {
  yield put(loginLoading());
  try {
    const profile = payload.provider
      ? yield loginFacebook(payload)
      : yield loginEmailPass(payload);

    yield call(StorageService.setJSON, userKeys.PROFILE, profile);
    yield put(loginSuccess(profile));
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}

function* logoutUser() {
  try {
    yield call(AsyncStorage.removeItem, userKeys.PROFILE);
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutFailure(e));
  }
}

export default [
  takeLatest(INIT_USER, initUser),
  takeLatest(LOGIN, loginUser),
  takeLatest(LOGOUT, logoutUser)
];
