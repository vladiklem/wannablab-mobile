import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AccessToken } from 'react-native-fbsdk';

import LoginView from './Login.view';
import { routeName as HOME } from '../Home/Home.container';
import { routeName as INTERESTS } from '../Interests/Interests.container';
import { isSuccess, isFailure } from '../../utils/requests';
import { login, signUp } from '../../store/user/actions';

export const routeName = 'LOGIN';

const Login = props => {
  const dispatch = useDispatch();
  const { loginRequest, signupRequest } = useSelector(state => state.user);
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openScene = useCallback(routeName => navigation.navigate(routeName), [
    navigation,
  ]);

  const onLogin = useCallback(() => {
    dispatch(login(null, username, password));
  }, [password, username]);

  const onSignup = useCallback(async () => {
    password.length < 8
      ? Alert.alert('password min length is 8 characters')
      : dispatch(signUp(username, password))
  }, [username, password]);

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
    const { status } = signupRequest;

    isSuccess(status) && openScene(INTERESTS);
  }, [signupRequest]);

  useEffect(() => {
    const { status, error } = loginRequest;

    isSuccess(status) && openScene(HOME);
    isFailure(status) && Alert.alert(error);
  }, [loginRequest])

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
