import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './Header.styles';

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Image source={require('../../assets/icons/menu.png')} />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>wannablab</Text>
      <TouchableWithoutFeedback>
        <Image source={require('../../assets/icons/user.png')} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
