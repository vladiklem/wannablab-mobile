import { GET_EVENTS, GET_EVENTS_SUCCESS } from './constants';

export const getEvents = () => ({
  type: GET_EVENTS,
});

export const getEventsSuccess = events => ({
  type: GET_EVENTS_SUCCESS,
  payload: {
    events,
  },
});
