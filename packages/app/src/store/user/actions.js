import {
  INIT_USER,
  INIT_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_FACEBOOK
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

// export const loginFB = accessToken => ({
//   type: LOGIN_FACEBOOK,
//   payload: {
//     accessToken
//   }
// })

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
