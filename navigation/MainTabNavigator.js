import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import MaIcon from "react-native-vector-icons/MaterialIcons";
import McIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome";

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ExercicesScreen from '../screens/ExercicesScreen';
import MessageScreen from '../screens/MessageScreen';


const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
}, {headerMode: 'screen',});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor}) => (
        <FaIcon
            color={tintColor}
            size={30}
            name={'user'}
        />
    ),
};

const DashboardStack = createStackNavigator({
    Dash: DashboardScreen,
}, {headerMode: 'screen',});

DashboardStack.navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({tintColor}) => (
        <MaIcon
            size={30}
            color={tintColor}
            name={'dashboard'}
        />
    ),
};

const ExercicesStack = createStackNavigator({
    Exercices: ExercicesScreen,
}, {headerMode: 'screen',});

ExercicesStack.navigationOptions = {
    tabBarLabel: 'Exercises',
    tabBarIcon: ({tintColor}) => (
        <McIcon
            color={tintColor}
            name={'clipboard-text-outline'}
            size={30}
        />
    ),
};

export default createMaterialTopTabNavigator({
    ProfileStack,
    DashboardStack,
    ExercicesStack,
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    initialRouteName: 'DashboardStack',
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
            borderTopColor: 'black',
        },
        showIcon: true,
        showLabel: false,
        activeTintColor: '#C4CC3F',
    },
});
