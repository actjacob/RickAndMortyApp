import React from 'react';
import RootNavigator from './src/router/rootNavigator';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
