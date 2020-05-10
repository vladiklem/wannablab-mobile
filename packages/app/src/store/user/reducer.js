import {
  INIT_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  UPDATE_USER_SUCCESS,
} from './constants';
import { requestStatus, initialRequest } from '../../constants';
import { createReducer } from '../../utils/store';

export const initialProfile = {
  id: null,
  login: '',
  fullName: '',
  userToken: null,
};

const initialState = {
  appToken: null,
  profile: initialProfile,
  loginRequest: initialRequest,
};

const handlers = {
  [INIT_USER_SUCCESS]: (state, action) => ({
    ...state,
    appToken: action.payload.appToken,
    profile: action.payload.profile,
  }),
  [LOGIN_LOADING]: state => ({
    ...state,
    loginRequest: {
      status: requestStatus.LOADING,
      error: '',
    },
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    profile: {
      ...state.profile,
      ...action.payload.profile,
    },
    loginRequest: {
      status: requestStatus.SUCCESS,
      error: '',
    },
  }),
  [LOGIN_FAILURE]: (state, payload) => ({
    ...state,
    loginRequest: {
      status: requestStatus.FAILURE,
      error: payload.error,
    },
  }),
  [UPDATE_USER_SUCCESS]: (state, action) => ({
    ...state,
    profile: {
      ...state.profile,
      ...action.payload.profile,
    },
  }),
};

export default createReducer(initialState, handlers);
