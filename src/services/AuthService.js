import {AsyncStorage} from 'react-native';
import ConnectyCube from 'react-native-connectycube';

import config from '../config';

export default class AuthService {
  init = async () => {
    ConnectyCube.init(...config.appCredentials);
    const session = await this.createAppSession();
    AsyncStorage.setItem('token', session.token);
  }

  createAppSession = () => {
    return new Promise((resolve, reject) => {
      ConnectyCube.createSession()
        .then(resolve)
        .catch(reject);
    })
  }

  signup = userProfile => new Promise((resolve, reject) => {
    ConnectyCube.users.signup(userProfile)
      .then(resolve)
      .catch(reject);
  })

  login = user => new Promise((resolve, reject) => {
    ConnectyCube.createSession(user)
      .then(resolve)
      .catch(reject);
  });

  logout = () => {
    ConnectyCube.chat.disconnect();
    ConnectyCube.destroySession();
  }
}
