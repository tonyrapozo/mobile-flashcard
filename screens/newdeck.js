import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';

export default class NewDeck extends React.Component {
    static navigationOptions = {
        title: 'New deck',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Home"
                onPress={() =>
                    navigate('Home')
                }
            />
        );
    }
}