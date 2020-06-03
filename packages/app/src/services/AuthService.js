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

  login = async loginUser => {
    try {
      console.info('user: ', loginUser);

      const session = await ConnectyCube.createSession(loginUser);
      console.info('session: ', session);

      await ConnectyCube.chat.connect({
        userId: session.user_id,
        password: loginUser.password,
      });

      return session;
    } catch (err) {
      console.log('Error');
    }
  };

  signup = userProfile =>
    Promise((resolve, reject) => {
      ConnectyCube.users.signup(userProfile).then(resolve).catch(reject);
    });

  logout = token => {
    ConnectyCube.logout({ keys: { token } });
  };
}
