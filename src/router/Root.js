import React, { useEffect, useState } from 'react';
import {
  createStackNavigator
} from '@react-navigation/stack';

import Login, { routeName as LOGIN } from '../scenes/Login/Login';
import Home, { routeName as HOME } from '../scenes/Home/Home';
import { AuthService } from '../services';

const Stack = createStackNavigator();

const Root = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const retrieveToken = async () => {
      const token = await AuthService.init();
      console.log(token);
      setToken(token);
    };
    retrieveToken();
  });

  const initialRouteName = token ? HOME : LOGIN;

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
