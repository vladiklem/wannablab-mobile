import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import Login, { routeName as LOGIN } from '../scenes/Login/Login.container';
import Interests, {
  routeName as INTERESTS,
} from '../scenes/Interests/Interests.container';
import Home, { routeName as HOME } from '../scenes/Home/Home.container';
import { init } from '../store/user/actions';

const Stack = createStackNavigator();

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={INTERESTS}
        component={Interests}
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
