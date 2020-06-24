import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';

import styles from './FBLoginButton.styles';

const FBLoginButton = props => {
  // const { onFBLogin = () => {}, onFBLogout = () => {} } = props;

  //TODO: Use LoginManager
  // return (
  //   <View style={styles.buttonWrapper}>
  //     <LoginButton
  //       style={styles.button}
  //       onLoginFinished={onFBLogin}
  //       onLogoutFinished={onFBLogout}
  //       label="Continue with fb"
  //     />
  //   </View>
  // );
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          source={require('../../assets/icons/facebook-logo.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>{'Enter with Facebook'.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FBLoginButton;
