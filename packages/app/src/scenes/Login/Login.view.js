import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
    errorMessage,
    isValidUsername,
    isValidPassword,
  } = props;

  const passwordIconPath = () =>
    isValidPassword
      ? require('../../assets/icons/lock.png')
      : require('../../assets/icons/lock-error.png');

  const emailIconPath = () =>
    isValidUsername
      ? require('../../assets/icons/email.png')
      : require('../../assets/icons/email-error.png');

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
          {errorMessage ? (
            <Text style={styles.titleError}>{errorMessage}</Text>
          ) : (
            <Text style={styles.title}>hello, blaber</Text>
          )}

          <Input
            placeholder="email"
            value={username}
            onChangeText={setUsername}
            containerStyle={styles.input}
            placeholderTextColor={colors.$placeholder}
            autoCompleteType="off"
            autoCorrect="false"
            iconPath={passwordIconPath()}
          />

          <Input
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.input}
            placeholderTextColor={colors.$placeholder}
            autoCompleteType="off"
            autoCorrect="false"
            secureTextEntry="true"
            iconPath={emailIconPath()}
          />

          <Text style={[styles.linkSmall, styles.linkDistance]}>
            forgot password?
          </Text>

          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={['#2DCE89', '#48C686', '#049A8F']}
            style={styles.buttonWrapper}>
            <Button label="Login" onPress={onLogin} />
          </LinearGradient>

          <View style={styles.buttonWrapper}>
            <FBLoginButton onFBLogin={onFBLogin} />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.text}>not a member?</Text>

            <Text style={styles.linkMedium}>join now</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;
