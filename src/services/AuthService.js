import AsyncStorage from '@react-native-community/async-storage';
import ConnectyCube, { CubeSessionManager } from 'react-native-connectycube';

import config from '../config';

export default class AuthService {
  init = async () => {
    const token = await AsyncStorage.getItem('token');
    const isValid = false;
    ConnectyCube.init(...config.appCredentials);

    if (!isValid) {
      const session = await this.createAppSession();
      AsyncStorage.setItem('token', session.token);

      return session.token;
    }

    return token;
  }

  isSessionValid = async () => {
    const isValid = await CubeSessionManager.instance.isActiveSessionValid();

    return isValid;
  }

  createAppSession = () => new Promise((resolve, reject) => {
    ConnectyCube.createSession()
      .then(resolve)
      .catch(reject);
  });

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
