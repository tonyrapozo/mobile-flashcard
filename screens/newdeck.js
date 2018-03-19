import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import * as api from '../data'

export default class NewDeck extends React.Component {
    static navigationOptions = {
        title: 'New deck',
    };
    addDeck = () => {
        let deck = {
            title: 'asdasd',
            questions: []
        };
        api.saveDeckTitle(deck);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Home"
                onPress={() =>{
                    this.addDeck();
                    navigate('Home')
                }}
            />
        );
    }
}