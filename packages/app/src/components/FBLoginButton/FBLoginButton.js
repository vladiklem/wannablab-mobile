import React from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

const FBLoginButton = props => {
  const {
    onFBLogin = () => {},
    onFBLogout = () => {},
  } = props;

  return (
    <View>
      <LoginButton
        onLoginFinished={onFBLogin}
        onLogoutFinished={onFBLogout}/>
    </View>
  );
};

export default FBLoginButton;
