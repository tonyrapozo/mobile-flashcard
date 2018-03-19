import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';

export default class Deck extends React.Component {
    static navigationOptions = {
        title: 'Deck',
    };

    render() {
        const { navigate, deckName } = this.props.navigation;
        const { deckName2 } = this.props;
        return (
            <View>
                <Text>{deckName}</Text>
                <Button
                    title="Home"
                    onPress={() =>
                        navigate('Home')
                    }
                />
            </View>
        );
    }
}