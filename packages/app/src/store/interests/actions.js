import { GET_INTERESTS, GET_INTERESTS_SUCCESS } from './constants';

export const getInterests = () => ({
  type: GET_INTERESTS,
});

export const getSuccess = interests => ({
  type: GET_INTERESTS_SUCCESS,
  payload: {
    interests,
  },
});
