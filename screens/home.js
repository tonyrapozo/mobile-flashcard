import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button title="Deck1" onPress={() => navigate('Deck', { deckName: 'deck1' })} />
                <Button title="Deck2" onPress={() => navigate('Deck', { deckName: 'deck1' })} />
                <Button title="New deck" onPress={() => navigate('NewDeck')} />
            </View>
        );
    }
}