import React, {Component} from 'react';
import {TextInput, View, TouchableHighlight, Text, Image, Alert} from 'react-native';
import {TextField} from 'react-native-material-textfield';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    static navigationOptions = {
        title: 'Se connecter'
    };

    rsp = undefined

    onLogin() {
        const {username, password} = this.state;

        fetch("http://kineplus.tech:4000/authentification/login", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        }).then((response) => {
            console.log(response.ok)
            if (response.ok.toString() === "true")
                this.props.navigation.navigate('Main');
            else
                Alert.alert(
                    'Mauvais identifiant',
                    'Identifiant ou mot de passe incorrect',
                    [
                        {text: 'OK', onPress: () => {}},
                    ],
                    {cancelable: false}
                )
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 40
            }}>
                <View style={{alignItems: 'center',}}>
                    <Image source={require('../assets/images/splash.png')}/>
                </View>
                <TextField
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
                    label={'Username'}
                />
                <TextField
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    label={'Password'}
                    secureTextEntry={true}
                />
                <TouchableHighlight
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#C4CC3F',
                        padding: 10
                    }}
                    onPress={() => this.onLogin()}
                >
                    <Text style={{color: 'white'}}>Connection</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#C4CC3F',
                        padding: 10
                    }}
                    onPress={() => this.props.navigation.navigate('MDP')}
                >
                    <Text style={{color: 'white'}}>Mot de passe oublié</Text>
                </TouchableHighlight>
            </View>
        );
    }

    forgortPassword() {

    }
}