import { all } from 'redux-saga/effects';

import user from './user/saga';
import interests from './interests/saga';
import events from './events/saga';

export default function* () {
  yield all([...user, ...interests, ...events]);
}
