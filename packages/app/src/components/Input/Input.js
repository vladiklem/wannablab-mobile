import React, { useCallback } from 'react';
import { View, TextInput, Image } from 'react-native';

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
    iconPath,
    ...rest
  } = props;

  const handleChangeText = useCallback(
    text => {
      onChangeText(text);
    },
    [onChangeText]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputGroup}>
        <Image source={iconPath} style={styles.icon} />
        <TextInput
          style={styles.input}
          value={value}
          autoCapitalize="none"
          placeholder={placeholder}
          keyboardType={KeyboardType}
          onChangeText={handleChangeText}
          placeholderTextColor={placeholderTextColor}
          {...rest}
        />
      </View>
    </View>
  );
};

export default React.memo(Input);
