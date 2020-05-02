import React, { useEffect } from 'react';
import {
  createStackNavigator
} from '@react-navigation/stack';

import Login, { routeName as LOGIN } from '../scenes/Login/Login';
import Home, { routeName as HOME } from '../scenes/Home/Home';
import { AuthService } from '../services';

const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    AuthService.init();
  });

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Root;
