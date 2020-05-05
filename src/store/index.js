import { createStore, combineReducers } from 'redux';

import user from './user/reducer';

const rootReducer = combineReducers({
  user
});

export default createStore(rootReducer);
