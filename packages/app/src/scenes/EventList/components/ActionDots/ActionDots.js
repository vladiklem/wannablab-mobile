import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import styles from './ActionDots.styles';

const ActionDots = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActionDots;
