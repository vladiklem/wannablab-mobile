import { all } from 'redux-saga/effects';

import user from './user/saga';
import interests from './interests/saga';

export default function* () {
  yield all([...user, ...interests]);
}
