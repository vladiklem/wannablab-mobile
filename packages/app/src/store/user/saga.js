import { takeLatest, call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthService } from '../../services';
import { INIT_USER, LOGIN } from './constants';
import {
  initSuccess,
  loginSuccess,
  loginLoading,
  loginFailure,
} from './actions';

function* initUser() {
  try {
    yield AuthService.init();
    const appToken = yield call(AsyncStorage.getItem, 'appToken');

    if (!appToken) {
      const { token } = yield AuthService.createAppSession();
      yield call(AsyncStorage.setItem, 'appToken', token);
      yield put(initSuccess(token));
    } else {
      yield put(initSuccess(appToken));
    }
  } catch (e) {
    console.error(e);
  }
}

function* loginUser({ payload }) {
  yield put(loginLoading());
  try {
    const credentials = { ...payload };
    const { id, token, user } = yield AuthService.login(credentials).catch(
      e => {
        console.log(e);
      },
    );
    const profile = {
      id,
      userToken: token,
      login: user.login,
    };

    yield put(loginSuccess(profile));
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}

export default [takeLatest(INIT_USER, initUser), takeLatest(LOGIN, loginUser)];
