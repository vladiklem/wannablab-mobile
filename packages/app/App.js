import 'react-native-gesture-handler';
import React from 'react';
import * as firebase from 'firebase';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store';

import { FIREBASE_CONFIG } from './src/config';

import Root from './src/router/Root';

if (firebase.apps.length === 0) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  </>
);

export default App;
