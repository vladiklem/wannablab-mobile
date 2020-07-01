import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './FilterItem.styles';

const FilterItem = ({ status, name }) => {
  const containerStyle =
    status === 'default' ? styles.defaultContainer : styles.activeContainer;

  const titleStyle =
    status === 'default' ? styles.defaultTitle : styles.activeTitle;

  return (
    <TouchableWithoutFeedback>
      <View style={containerStyle}>
        <Text style={titleStyle}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

FilterItem.defaultProps = {
  status: 'default',
};

export default FilterItem;
