import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
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
        <Image
          source={require('../../assets/images/front_cloud.png')}
          style={styles.topImage}
        />
        <Image
          source={require('../../assets/images/back_cloud.png')}
          style={styles.bottomImage}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>hello, blaber</Text>
          <Input
            placeholder="email"
            value={username}
            onChangeText={setUsername}
            containerStyle={styles.input}
            placeholderTextColor={colors.$placeholder}
          />
          <Input
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.input}
            placeholderTextColor={colors.$placeholder}
          />
          <Text style={styles.link}>forgot password?</Text>
          <View style={styles.buttonWrapper}>
            <Button label="Login" onPress={onLogin} />
          </View>
          <View style={styles.buttonWrapper}>
            <FBLoginButton onFBLogin={onFBLogin} />
          </View>
          <View>
            <Text>not a member?</Text>
            <Text style={styles.link}>join now</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;
