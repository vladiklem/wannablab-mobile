import React, { useCallback } from 'react';
import { View, TextInput } from 'react-native';

import styles from './Input.styles';


const Input = props => {
  const {
    value,
    onChangeText,
    placeholder = '',
    KeyboardType = 'default'
  } = props;

  const handleChangeText = useCallback(text => {
    onChangeText(text);
  }, [onChangeText]);

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType={KeyboardType}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default React.memo(Input);
