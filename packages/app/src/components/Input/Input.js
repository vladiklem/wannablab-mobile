import React, { useCallback } from 'react';
import { View, TextInput } from 'react-native';

import styles from './Input.styles';
import colors from '../../theme/colors';

const Input = props => {
  const {
    value,
    onChangeText,
    placeholder = '',
    KeyboardType = 'default',
    containerStyle = {},
    placeholderTextColor = colors.$white,
  } = props;

  const handleChangeText = useCallback(
    text => {
      onChangeText(text);
    },
    [onChangeText]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        value={value}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType={KeyboardType}
        onChangeText={handleChangeText}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default React.memo(Input);
