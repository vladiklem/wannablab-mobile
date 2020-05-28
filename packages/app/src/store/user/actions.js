import {
  INIT_USER,
  INIT_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_LOADING,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from './constants';

export const init = () => ({
  type: INIT_USER,
});

export const initSuccess = (appToken, profile) => ({
  type: INIT_USER_SUCCESS,
  payload: {
    appToken,
    profile,
  },
});

export const login = (provider, login, password) => ({
  type: LOGIN,
  payload: {
    provider,
    login,
    password,
  },
});

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = profile => ({
  type: LOGIN_SUCCESS,
  payload: {
    profile,
  },
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const updateUser = updatedProfile => ({
  type: UPDATE_USER,
  payload: {
    updatedProfile,
  },
});

export const updateUserSuccess = profile => ({
  type: UPDATE_USER_SUCCESS,
  payload: {
    profile,
  },
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
});

export const signUp = (login, password) => ({
  type: SIGN_UP,
  payload: {
    login,
    password,
  },
});

export const signUpLoading = () => ({
  type: SIGN_UP_LOADING,
});

export const signUpSuccess = profile => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    profile,
  },
});
