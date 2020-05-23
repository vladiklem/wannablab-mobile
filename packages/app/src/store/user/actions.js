import {
  INIT_USER,
  INIT_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_FACEBOOK,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './constants';

export const init = () => ({
  type: INIT_USER
});

export const initSuccess = (appToken, profile) => ({
  type: INIT_USER_SUCCESS,
  payload: {
    appToken,
    profile
  }
});

export const login = (provider, login, password) => ({
  type: LOGIN,
  payload: {
    provider,
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

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = error => ({
  type: LOGOUT_FAILURE,
  payload: {
    error
  }
})
