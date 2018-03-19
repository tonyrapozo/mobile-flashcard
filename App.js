import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import * as api from './data';
import Home from './screens/home'
import NewDeck from './screens/newdeck'
import Deck from './screens/deck'

import { DrawerNavigator, TabNavigator, StackNavigator  } from 'react-navigation';

const AppNavigator = TabNavigator ({
    Home: { screen: Home },
    NewDeck: { screen: NewDeck }
});

export default class App extends React.Component {
    render() {
      return (
        <AppNavigator />
      );
    }
  }