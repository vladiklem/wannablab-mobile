import React from 'react';
import { View, Text } from 'react-native';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Login.style';

const LoginView = props => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    onLogin,
    onSignup
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Enter your username..."
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Enter your password..."
        value={password}
        onChangeText={setPassword}
        containerStyle={styles.input}
      />
      <Button
        label="Login"
        onPress={onLogin}
      />
      <Button
        label="Sign up"
        onPress={onSignup}
      />
    </View>
  );
};

export default LoginView;