import { takeLatest, put } from 'redux-saga/effects';
import * as firebase from 'firebase';
import { GET_EVENTS } from './constants';
import { getEventsSuccess } from './actions';

function* getEvents() {
  try {
    const res = yield firebase.database().ref('/events').once('value');

    const events = Object.values(res.val());

    yield put(getEventsSuccess(events));
  } catch (e) {
    console.error(e);
  }
}

export default [takeLatest(GET_EVENTS, getEvents)];
