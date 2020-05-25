import React from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './InterestItem.styles';

const InterestItem = props => {
  const {
    id, name, selected, onSelect,
  } = props;

  const toggleSwitch = () => {
    onSelect(id, selected);
  };

  return (
    <View style={styles.itemContainer}>
      <Switch
        style={styles.switch}
        value={selected}
        onValueChange={toggleSwitch}
        thumbColor="#5E72E4"
      />
      <Text style={styles.itemName}>{name}</Text>
    </View>
  );
};

export default InterestItem;
