import React, { useEffect } from 'react';
import {
  createStackNavigator
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import Login, { routeName as LOGIN } from '../scenes/Login/Login.container';
import Home, { routeName as HOME } from '../scenes/Home/Home.container';
import { init } from '../store/user/actions';
import { AuthService } from '../services';

const Stack = createStackNavigator();

const Root = props => {
  useEffect(() => {
    const retrieveSessionToken = async () => {
      await AuthService.init();
      const appToken = await AsyncStorage.getItem('appToken');

      if (!appToken) {
        const { token } = await AuthService.createAppSession();
        await AsyncStorage.setItem('appToken', token);
        props.init(token);
      } else {
        props.init(appToken);
      }
    };
    retrieveSessionToken();
  }, []);


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

const mapDispatchToProps = { init };

export default connect(null, mapDispatchToProps)(Root);
