/* eslint-disable import/no-cycle */
import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import LoginView from './Login.view';
import { routeName as HOME } from '../Home/Home.container';
import { routeName as INTERESTS } from '../Interests/Interests.container';
import { login, signUp } from '../../store/user/actions';
import { isSuccess, isFailure } from '../../utils/requests';
import {
  isValidEmailCheck,
  isValidPasswordCheck,
} from '../../utils/validation';

import { FACEBOOK } from '../../constants';

export const routeName = 'LOGIN';

const Login = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { loginRequest, signupRequest } = useSelector(state => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const openScene = useCallback(routeName => navigation.navigate(routeName), [
    navigation,
  ]);

  const inValidPasswordAction = () => {
    setErrorMessage('invalid password');
    setIsValidPassword(false);
    setPassword('');

    return false;
  };

  const validPasswordAction = () => {
    setIsValidPassword(true);

    return true;
  };

  const isFormValid = useCallback(() => {
    return isValidPasswordCheck(password)
      ? validPasswordAction()
      : inValidPasswordAction();
  }, [password, isValidPassword]);

  const finishAuth = useCallback(
    (action, ...args) => {
      dispatch(action(...args));
      setPassword('');
      setUsername('');
    },
    [setPassword, setUsername]
  );

  const onLogin = useCallback(() => {
    isFormValid() && finishAuth(login, null, username, password);
  }, [password, username]);

  const onSignup = useCallback(async () => {
    isFormValid() && finishAuth(signUp, username, password);
  }, [username, password]);

  const onFBLogin = accessToken => {
    dispatch(login(FACEBOOK, accessToken, null));
  };

  useEffect(() => {
    const { status } = signupRequest;

    isSuccess(status) && openScene(INTERESTS);
  }, [signupRequest]);

  useEffect(() => {
    const { status, error } = loginRequest;

    isSuccess(status) && openScene(INTERESTS); //TODO: should be changed

    // isSuccess(status) && openScene(HOME);
    isFailure(status) && Alert.alert(error);
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
      errorMessage={errorMessage}
      isValidUsername={isValidUsername}
      isValidPassword={isValidPassword}
    />
  );
};

export default Login;
