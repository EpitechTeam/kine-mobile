import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Login from './Login';

import MainTabNavigator from './MainTabNavigator';
import SceanceScreen from "../screens/SceanceScreen";
import MessageScreen from "../screens/MessageScreen";
import ExercicesScreen from "../screens/ExercicesScreen";

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

export default createSwitchNavigator({
    Login: Login,
    Dash: Stack,
}, {});