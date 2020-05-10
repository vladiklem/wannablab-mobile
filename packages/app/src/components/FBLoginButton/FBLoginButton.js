import React from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

const FBLoginButton = ({ onFBLogin }) => {

  return (
    <View>
      <LoginButton
        onLoginFinished={onFBLogin}
        onLogoutFinished={() => console.log("logout.")}/>
    </View>
  );
};

export default FBLoginButton;
