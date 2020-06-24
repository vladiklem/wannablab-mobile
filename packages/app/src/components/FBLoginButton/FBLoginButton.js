import React from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

import styles from './FBLoginButton.styles';

const FBLoginButton = props => {
  const { onFBLogin = () => {}, onFBLogout = () => {} } = props;

  return (
    <View style={styles.buttonWrapper}>
      <LoginButton onLoginFinished={onFBLogin} onLogoutFinished={onFBLogout} />
    </View>
  );
};

export default FBLoginButton;
