import React from 'react';
import {SafeAreaView, View, Button, Text, StyleSheet, TouchableHighlight} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: -5
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});


export default class SceanceScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    state = {
        visible: false
    }

    render() {
        return (
            <View style={styles.container}>
                <SwipeUpDown
                    hasRef={ref => (this.swipeUpDownRef = ref)}
                     itemMini={
                       <Icon style={styles.welcome} size={60} name={'chevron-thin-up'}/>
                    }
                    itemFull={
                        <View>
                            <TouchableHighlight
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: '#C4CC3F',
                                    padding: 10
                                }}
                                onPress={() => this.props.navigation.navigate('Main')}
                            >
                                <Text style={{color: 'white'}}>Terminer la Scéance</Text>
                            </TouchableHighlight>
                        </View>
                    }
                    onShowMini={() => console.log('mini')}
                    onShowFull={() => console.log('full')}
                    disablePressToShow={false}
                    swipeHeight={40}
                    style={{backgroundColor: '#ccc'}}
                    animation="easeInEaseOut"
                />
                </View>
        );
    }
}