import React from 'react';
import { View, SafeAreaView, Text, Switch, FlatList } from 'react-native';
import Button from '../../components/Button/Button';
import styles from './Interests.style';

const Item = ({ id, name, selected, onSelect }) => {
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

const InterestsView = ({ userInterests, onSelect, onSave }) => {
  const onPress = () => {
    onSave(userInterests);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select your interests</Text>
      <FlatList
        data={userInterests}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            selected={item.active}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Button label="Save" onPress={onPress} />
    </SafeAreaView>
  );
};

export default InterestsView;
