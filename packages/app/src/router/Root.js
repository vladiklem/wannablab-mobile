import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header/Header';

import Login, { routeName as LOGIN } from '../scenes/Login/Login.container';
import EventList, {
  routeName as EVENTLIST,
} from '../scenes/EventList/EventList.container';
import Interests, {
  routeName as INTERESTS,
} from '../scenes/Interests/Interests.container';
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
      <Stack.Screen
        name={EVENTLIST}
        component={EventList}
        options={{
          headerStyle: { height: 115 },
          headerTitle: () => <Header />,
        }}
      />
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
