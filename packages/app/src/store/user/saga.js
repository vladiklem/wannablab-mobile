/* eslint-disable camelcase */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { StorageService, AuthService } from '../../services';

import { INIT_USER, UPDATE_USER, LOGIN, LOGOUT, SIGN_UP } from './constants';
import { userKeys, UNKNOWN } from '../../constants';
import {
  initSuccess,
  loginSuccess,
  loginLoading,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  signUpSuccess,
  signUpLoading,
  updateUserSuccess,
} from './actions';
import { initialProfile } from './reducer';
import AsyncStorage from '@react-native-community/async-storage';

const isValid = date => (Date.now() - Date.parse(date)) / 60000 < 120;

function* getAppToken() {
  try {
    const appToken = yield call(StorageService.getItem, userKeys.APP_TOKEN);
    const updatedAt = yield call(StorageService.getItem, userKeys.UPDATED_AT);

    if (!appToken || !updatedAt || !isValid(updatedAt)) {
      const {
        token,
        updated_at: updatedAt,
      } = yield AuthService.createAppSession();
      yield call(StorageService.setItem, userKeys.UPDATED_AT, updatedAt);
      yield call(StorageService.setItem, userKeys.APP_TOKEN, token);

      return token;
    }

    return appToken;
  } catch (e) {
    console.error(e);
  }
}

function* initUser() {
  try {
    yield AuthService.init();

    const appToken = yield call(getAppToken);
    const profile = yield call(StorageService.getJSON, userKeys.PROFILE);

    yield put(initSuccess(appToken, profile || initialProfile));
  } catch (e) {
    console.error(e);
    Alert.alert('some error was occured, please try again later');
  }
}

function* loginFacebook({ provider, login: token }) {
  const credentials = {
    provider,
    keys: { token },
  };

  const session = yield AuthService.login(credentials).catch(e =>
    console.error(e)
  );

  return {
    id: session.user_id,
    userToken: session.token,
    fullName: UNKNOWN,
    login: UNKNOWN,
    provider,
  };
}

function* loginEmailPass({ login, password }) {
  const credentials = {
    login,
    password,
  };

  const { token, user } = yield AuthService.login(credentials).catch(e => {
    throw e;
  });

  return {
    id: user.id,
    userToken: token,
    login: user.login,
    fullName: UNKNOWN,
    provider: null,
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
    yield put(loginFailure('this user not exists'));
  }
}

function* logoutUser() {
  try {
    yield call(AsyncStorage.removeItem, userKeys.PROFILE);
    const { userToken } = yield select(store => store.user);
    yield call(AuthService.logout, userToken);
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutFailure(e));
  }
}

function* signUpUser({ payload }) {
  try {
    yield put(signUpLoading());
    const { login, password } = payload;
    const { appToken: token } = yield select(state => state.user);
    console.log(token);

    yield AuthService.signup({ login, password, keys: { token } });

    const profile = yield loginEmailPass({ login, password });
    yield put(signUpSuccess(profile));
  } catch (e) {
    console.log(e);
  }
}

function* updateUser({ payload }) {
  try {
    console.log(payload.updatedProfile);
    const {
      user: { full_name, user_tags },
    } = yield AuthService.update(payload.updatedProfile).catch(e => {
      console.error(e);
    });

    const updatedProfile = {
      fullName: full_name || UNKNOWN,
      interests: user_tags && user_tags.split(','),
    };

    yield put(updateUserSuccess(updatedProfile));
  } catch (e) {
    console.error(e);
  }
}

export default [
  takeLatest(INIT_USER, initUser),
  takeLatest(LOGIN, loginUser),
  takeLatest(LOGOUT, logoutUser),
  takeLatest(SIGN_UP, signUpUser),
  takeLatest(UPDATE_USER, updateUser),
];
