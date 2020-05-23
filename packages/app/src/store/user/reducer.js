import {
  INIT_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './constants';
import { requestStatus, initialRequest } from '../../constants';
import { createReducer } from '../../utils/store';

export const initialProfile = {
  id: null,
  login: '',
  fullName: '',
  userToken: null,
  provider: null
};

const initialState = {
  appToken: null,
  profile: initialProfile,
  loginRequest: initialRequest,
  logoutRequest: initialRequest
};

const handlers = {
  [INIT_USER_SUCCESS]: (state, action) => ({
    ...state,
    appToken: action.payload.appToken,
    profile: action.payload.profile
  }),
  [LOGIN_LOADING]: state => ({
    ...state,
    loginRequest: {
      status: requestStatus.LOADING,
      error: ''
    }
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    profile: {
      ...state.profile,
      ...action.payload.profile
    },
    loginRequest: {
      status: requestStatus.SUCCESS,
      error: ''
    }
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loginRequest: {
      status: requestStatus.FAILURE,
      error: action.payload.error
    }
  }),
  [LOGOUT_SUCCESS]: state => ({
    ...state,
    profile: initialProfile,
    loginRequest: initialRequest,
    logoutRequest: {
      status: requestStatus.SUCCESS,
      error: ''
    }
  }),
  [LOGOUT_FAILURE]: (state, action) => ({
    ...state,
    logoutRequest: {
      status: requestStatus.FAILURE,
      error: action.payload.error
    }
  })
};

export default createReducer(initialState, handlers);
