import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { routeName as HOME } from '../Home/Home';
import { AuthService } from '../../services';
import styles from './Login.style';

export const routeName = 'LOGIN';

const Login = props => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const openHome = ({ user }) => navigation.navigate(HOME, { user });

  const login = () => {
    const now = Date.now();
    const user = {
      login: name,
      password
    };
    AuthService
      .login(user)
      .then(openHome)
      .catch(e => console.error(e));
  };

  const signup = async () => {
    if (password.length < 8) {
      Alert.alert('password min length is 8 characters');

      return;
    }
    const token = await AsyncStorage.getItem('token');
    const user = {
      login: name,
      password,
      keys: {
        token
      }
    };
    AuthService
      .signup(user)
      .then(openHome)
      .catch(e => console.error(e));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Enter your name..."
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Enter your password..."
        value={password}
        onChangeText={setPassword}
      />
      <Button
        label="Login"
        onPress={login}
      />
      <Button
        label="Sign up"
        onPress={signup}
      />
    </View>
  );
};

export default Login;
