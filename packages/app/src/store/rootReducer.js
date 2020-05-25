import { combineReducers } from 'redux';

import user from './user/reducer';
import interests from './interests/reducer';

export default combineReducers({
  user,
  interests,
});
