import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Animated,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';

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

  const bottomCloud = useState(new Animated.Value(0))[0];
  const topCloud = useState(new Animated.Value(0))[0];

  function moveBottomCloud() {
    Animated.timing(bottomCloud, {
      toValue: 400,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  function moveTopCloud() {
    Animated.timing(topCloud, {
      toValue: 50,
      delay: 1000,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    moveTopCloud();
    moveBottomCloud();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.bottomImage,
            { transform: [{ translateY: bottomCloud }] },
          ]}>
          <Image source={require('../../assets/images/front_cloud.png')} />
        </Animated.View>

        <Animated.View style={styles.topImage}>
          <Image source={require('../../assets/images/back_cloud.png')} />
        </Animated.View>

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
            autoCorrect={false}
            keyboardType="email-address"
            iconPath={
              isValidUsername
                ? require('../../assets/icons/email.png')
                : require('../../assets/icons/email-error.png')
            }
          />

          <Input
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.input}
            placeholderTextColor={colors.$placeholder}
            autoCompleteType="off"
            secureTextEntry={true}
            iconPath={
              isValidPassword
                ? require('../../assets/icons/lock.png')
                : require('../../assets/icons/lock-error.png')
            }
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
