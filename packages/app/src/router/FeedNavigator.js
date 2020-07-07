import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header/Header';

import EventList, {
  routeName as EVENTLIST,
} from '../scenes/EventList/EventList.container';

const Stack = createStackNavigator();

export const routeName = 'FEED';

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EVENTLIST}
        component={EventList}
        options={{
          headerStyle: { height: 115 },
          headerLeft: null,
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen
        name="EVENT"
        component={EventList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
