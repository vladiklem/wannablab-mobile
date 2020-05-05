import { INIT_USER } from './constants';
import { createReducer } from '../../utils/store';

const initialState = {
  login: '',
  name: '',
  appToken: null,
  userToken: null
};

const handlers = {
  [INIT_USER]: (state, action) => ({
    ...state,
    appToken: action.payload.appToken
  })
};

export default createReducer(initialState, handlers);
