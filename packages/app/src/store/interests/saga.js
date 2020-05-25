import { takeLatest, call, put } from 'redux-saga/effects';
import * as firebase from 'firebase';
import { GET_INTERESTS, GET_INTERESTS_SUCCESS } from './constants';
import { getSuccess } from './actions';

function* getInterests() {
  try {
    const res = yield firebase
      .database()
      .ref('/interests')
      .once('value');

    const interests = Object.values(res.val());

    yield put(getSuccess(interests));
  } catch (e) {
    console.error(e);
  }
}

export default [takeLatest(GET_INTERESTS, getInterests)];
