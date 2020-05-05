import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import LoginView from './Login.view';
import { routeName as HOME } from '../Home/Home.container';
import { AuthService } from '../../services';

export const routeName = 'LOGIN';

const Login = props => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const openHome = ({ user }) => navigation.navigate(HOME, { user });

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
    const user = {
      login: name,
      password
    };
    AuthService
      .login(user)
      .then(openHome)
      .catch(showErrorAlert);
  }, [password, name, openHome, showErrorAlert]);

  const onSignup = useCallback(async () => {
    if (password.length < 8) {
      Alert.alert('password min length is 8 characters');

      return;
    }

    const user = {
      login: name,
      password,
      keys: {
        token: props.appToken
      }
    };
    AuthService
      .signup(user)
      .then(openHome)
      .catch(showErrorAlert);
  }, [name, password, openHome, showErrorAlert, props.appToken]);

  console.log(props.appToken);

  return (
    <LoginView
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      onLogin={onLogin}
      onSignup={onSignup}
    />
  );
};

const mapStateToProps = ({ user }) => ({
  appToken: user.appToken
});

export default connect(mapStateToProps)(Login);
