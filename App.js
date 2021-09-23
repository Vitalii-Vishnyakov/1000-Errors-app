import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppNavigation } from './src/navigation/AppNavigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});