import React from 'react';
import { View, Text } from 'react-native';

export const routeName = 'HOME';

const Home = props => {
  return (
    <View>
      <Text>{routeName}</Text>
    </View>
  );
};

export default Home;
