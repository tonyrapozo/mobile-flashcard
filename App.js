import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import * as api from './data';
import Home from './screens/home'
import NewDeck from './screens/newdeck'
import Deck from './screens/deck'

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Home },
    NewDeck: { screen: NewDeck },
    Deck: { screen: Deck },
});

export default App;