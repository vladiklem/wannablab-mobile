import { GET_INTERESTS_SUCCESS } from './constants';
import { requestStatus } from '../../constants';
import { createReducer } from '../../utils/store';

const initialState = {
  interests: [],
};

const handlers = {
  [GET_INTERESTS_SUCCESS]: (state, action) => ({
    ...state,
    interests: action.payload.interests,
  }),
};

export default createReducer(initialState, handlers);
