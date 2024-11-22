import React from 'react';
import RootNavigator from './src/router/rootNavigator';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
