import { GET_EVENTS_SUCCESS } from './constants';
import { createReducer } from '../../utils/store';

const initialState = {
  events: [],
};

const handlers = {
  [GET_EVENTS_SUCCESS]: (state, action) => ({
    ...state,
    events: action.payload.events,
  }),
};

export default createReducer(initialState, handlers);
