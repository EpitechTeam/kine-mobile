import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Login';

import MainTabNavigator from './MainTabNavigator';
import SceanceScreen from "../screens/SceanceScreen";
import MessageScreen from "../screens/MessageScreen";
import ExercicesScreen from "../screens/ExercicesScreen";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator({
    Main: {
        screen: MainTabNavigator,
        navigationOptions: {
            header: null,
        },
    },
    Sceance: SceanceScreen,
    Message: MessageScreen,
}, {headerMode: 'screen',});

const  App = createStackNavigator({
    Login: Login,
    MDP: ForgotPassword,
    Dash: Stack,
})

export default createAppContainer(App);