import {
  INIT_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE
} from './constants';
import { requestStatus } from '../../constants';
import { createReducer } from '../../utils/store';

const initialState = {
  appToken: null,
  profile: {
    id: null,
    login: '',
    firstName: '',
    lastName: '',
    appToken: null,
    userToken: null
  },
  loginRequest: {
    status: requestStatus.IDLE,
    error: ''
  }
};

const handlers = {
  [INIT_USER_SUCCESS]: (state, action) => ({
    ...state,
    appToken: action.payload.appToken
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
  [LOGIN_FAILURE]: (state, payload) => ({
    ...state,
    loginRequest: {
      status: requestStatus.FAILURE,
      error: payload.error
    }
  })
};

export default createReducer(initialState, handlers);
