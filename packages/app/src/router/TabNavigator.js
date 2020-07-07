import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedNavigator, { routeName as FEED } from './FeedNavigator';

const Tab = createBottomTabNavigator();

export const routeName = 'TAB';

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={FEED} component={FeedNavigator} />

      <Tab.Screen name="LIKED_EVENTS" component={FeedNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
