import ConnectyCube from 'react-native-connectycube';

import { CREDENTIALS, CONFIG } from '../config';

export default class AuthService {
  init = () => ConnectyCube.init(CREDENTIALS, CONFIG);

  createAppSession = () =>
    new Promise((resolve, reject) => {
      ConnectyCube.createSession().then(resolve).catch(reject);
    });

  update = userProfile =>
    new Promise((resolve, reject) => {
      ConnectyCube.users.update(userProfile).then(resolve).catch(reject);
    });

  login = user =>
    new Promise((resolve, reject) => {
      ConnectyCube.createSession(user).then(resolve).catch(reject);
    });

  signup = userProfile =>
    new Promise((resolve, reject) => {
      ConnectyCube.users.signup(userProfile).then(resolve).catch(reject);
    });

  logout = token => {
    ConnectyCube.logout({ keys: { token } });
  };
}
