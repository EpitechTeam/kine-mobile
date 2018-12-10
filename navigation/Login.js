import React, {Component} from 'react';
import {TextInput, View, TouchableHighlight, Text, Image} from 'react-native';
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

    onLogin() {
        const {username, password} = this.state;
        this.props.navigation.navigate('Main');
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
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Text style={{color: 'white'}}>Connection</Text>
                </TouchableHighlight>
            </View>
        );
    }
}