import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './Button.styles';

const Button = props => {
  const { label, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
