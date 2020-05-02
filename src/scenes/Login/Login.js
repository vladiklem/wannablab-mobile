import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { routeName as HOME } from '../Home/Home';
import { AuthService } from '../../services';
import styles from './Login.style';

export const routeName = 'LOGIN';

const Login = props => {
  const { navigation } = props;
  const [name, setName] = useState('');

  const login = () => {
    const now = Date.now();
    const user = {
      id: now,
      name,
      login: name,
      password: now
    };
    AuthService
      .login(user)
      .then(() => {
        navigation.navigate(HOME);
      })
      .catch(e => console.error(e));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your name</Text>
      <Input
        placeholder="Enter your name..."
        value={name}
        onChangeText={setName}
      />
      <Button
        label="Start"
        onPress={login}
      />
    </View>
  );
};

export default Login;
