import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, FlatList } from 'react-native';

import * as api from '../data'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            decks: [{
                title:'asdasd'
            },{
                title:'asssdqqqwe  eqwe'
            }],
            loading: true
        }
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    componentDidMount() {
        api.getDecks().then(data => {
            this.setState({
                decks: data,
                loading: false
            })
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { decks } = this.state;
        return (
            <View>
                <FlatList
                    data={decks}
                    renderItem={({ item, idx }) => <Text key={idx}>{item.title}</Text>}
                />
                <Button title="Deck1" onPress={() => navigate('DrawerOpen')} />
                <Button title="Deck1" onPress={() => navigate('Deck', { deckName: 'deck1' })} />
                <Button title="Deck2" onPress={() => navigate('Deck', { deckName: 'deck1' })} />
                <Button title="New deck" onPress={() => navigate('NewDeck')} />
            </View>
        );
    }
}