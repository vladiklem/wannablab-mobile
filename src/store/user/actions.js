import { INIT_USER } from './constants';

export const init = appToken => ({
  type: INIT_USER,
  payload: {
    appToken
  }
});
