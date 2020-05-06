import {
  INIT_USER,
  INIT_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE
} from './constants';

export const init = () => ({
  type: INIT_USER
});

export const initSuccess = appToken => ({
  type: INIT_USER_SUCCESS,
  payload: {
    appToken
  }
});

export const login = (login, password) => ({
  type: LOGIN,
  payload: {
    login,
    password
  }
});

export const loginLoading = () => ({
  type: LOGIN_LOADING
});

export const loginSuccess = profile => ({
  type: LOGIN_SUCCESS,
  payload: {
    profile
  }
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error
  }
});
