import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';

import { AddFail } from '../screens/AddFail';
import { ShowStat } from '../screens/ShowStat';
const BottomNavigator = createBottomTabNavigator({
  AddFail: {
    screen: AddFail,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: (
        <Ionicons name='add-circle' size={30}></Ionicons>
      ),
    },
  },
  ShowStat: {
    screen: ShowStat,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: (
        <Ionicons name='stats-chart' size={30}></Ionicons>
      ),
    },
  },
});
export const AppNavigation =
  createAppContainer(BottomNavigator);
