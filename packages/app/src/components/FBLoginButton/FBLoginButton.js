import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import styles from './FBLoginButton.styles';

const FBLoginButton = props => {
  const { onFBLogin = () => {} } = props;

  const login = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ',
            result.grantedPermissions.toString()
          );

          AccessToken.getCurrentAccessToken().then(data => {
            const { accessToken } = data;

            onFBLogin(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ', error);
      }
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={login}>
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
