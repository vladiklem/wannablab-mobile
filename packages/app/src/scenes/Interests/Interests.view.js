import React from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import Button from '../../components/Button/Button';
import Item from './components/InterestItem/InterestItem';
import styles from './Interests.styles';

const InterestsView = ({ userInterests, onSelect, onSave }) => (
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
    <View style={{ height: 48 }}>
      <Button label="Save" onPress={onSave} />
    </View>
  </SafeAreaView>
);

export default InterestsView;
