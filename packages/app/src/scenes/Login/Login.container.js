import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AccessToken } from 'react-native-fbsdk';

import LoginView from './Login.view';
import { routeName as HOME } from '../Home/Home.container';
import { AuthService } from '../../services';
import { isSuccess } from '../../utils/requests';
import { login } from '../../store/user/actions';

export const routeName = 'LOGIN';

const Login = props => {
  const dispatch = useDispatch();
  const { appToken, loginRequest } = useSelector(state => state.user);
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openHome = useCallback(() => navigation.navigate(HOME), [navigation]);

  const showErrorAlert = (e, onConfirm = () => {}) => {
    const { errors } = e.info;
    const errorMessage = errors.login[0] || errors[0];
    Alert.alert(
      e.code.toFixed(0),
      errorMessage,
      [
        { text: 'ok', onConfirm }
      ]
    );
  };

  const onLogin = useCallback(() => {
    dispatch(login(null, username, password));
  }, [password, username]);

  const onSignup = useCallback(async () => {
    if (password.length < 8) {
      Alert.alert('password min length is 8 characters');

      return;
    }

    const credentials = {
      login: username,
      password,
      keys: {
        token: appToken
      }
    };
    AuthService
      .signup(credentials)
      .then(openHome)
      .catch(showErrorAlert);
  }, [username, password, openHome, showErrorAlert, appToken]);

  const onFBLogin = (error, result) => {
    if (error) {
      console.log("login has error: " + result.error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          const { accessToken } = data;
          dispatch(login('facebook', accessToken, null));
        }
      )
    } 
  }

  useEffect(() => {
    const { status } = loginRequest;

    if (isSuccess(status)) {
      openHome();
    }
  }, [loginRequest]);

  return (
    <LoginView
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onLogin={onLogin}
      onFBLogin={onFBLogin}
      onSignup={onSignup}
    />
  );
};

export default Login;
