import { combineReducers } from 'redux';

import user from './user/reducer';
import interests from './interests/reducer';
import events from './events/reducer';

export default combineReducers({
  user,
  interests,
  events,
});
