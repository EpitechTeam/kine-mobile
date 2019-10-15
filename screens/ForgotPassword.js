import React, {Component} from 'react';
import {TextInput, View, TouchableHighlight, Text, Image, Alert} from 'react-native';
import {TextField} from 'react-native-material-textfield';

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    static navigationOptions = {
        title: 'Mot de passe oublié'
    };



    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 40
            }}>
                <TextField
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
                    label={'Email'}
                />
                <TouchableHighlight
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#C4CC3F',
                        padding: 10
                    }}
                    onPress={() =>  Alert.alert(
                        'Envoi Confirmer',
                        'Un mail de recupération de mot de passe vous a été envoyer',
                        [
                            { text: 'OK', onPress: () => this.props.navigation.goBack() },
                        ],
                        { cancelable: false }
                    )}
                >
                    <Text style={{color: 'white'}}>Confirmer</Text>
                </TouchableHighlight>
            </View>
        );
    }

}