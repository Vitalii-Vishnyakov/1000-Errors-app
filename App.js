import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { AppNavigation } from './src/navigation/AppNavigation';
import { store } from './src/redux/store';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { DB } from './src/db';
import { addError } from './src/redux/action';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

export default function App() {
  //const dispatch = useDispatch();
  async function onAppLoad() {
    await Font.loadAsync({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
    try {
      await DB.init();
    } catch (error) {}
    try {
    } catch (error) {}
  }
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={onAppLoad}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={(err) => console.log(err)}
      ></AppLoading>
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
}
