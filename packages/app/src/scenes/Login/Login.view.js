import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';

import colors from '../../theme/colors';

import FBLoginButton from '../../components/FBLoginButton/FBLoginButton';
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
    onFBLogin,
    onSignup,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>hello, blaber</Text>
        <FBLoginButton onFBLogin={onFBLogin} />
        <Input
          placeholder="email"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={colors.$placeholder}
        />
        <Input
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          containerStyle={styles.input}
          placeholderTextColor={colors.$placeholder}
        />
        <Button label="Login" onPress={onLogin} />
        <Button label="Sign up" onPress={onSignup} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;
