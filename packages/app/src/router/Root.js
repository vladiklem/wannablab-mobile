import React, { useEffect } from 'react';
import {
  createStackNavigator
} from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import Login, { routeName as LOGIN } from '../scenes/Login/Login.container';
import Home, { routeName as HOME } from '../scenes/Home/Home.container';
import { init } from '../store/user/actions';

const Stack = createStackNavigator();

const Root = () => {
  const dispatch = useDispatch();
  const { userToken } = useSelector(store => store.user.profile);

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <Stack.Navigator>
      {!userToken ? (
        <Stack.Screen
          name={LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Root;
