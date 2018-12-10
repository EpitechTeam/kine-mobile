import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";

export default class ExercicesScreen extends React.Component {
    static navigationOptions = {
        title: 'Activité',
    };
    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: '#ffffff', padding: 25,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View  style={{
                    flex: 1,
                }}>
                    <TouchableHighlight
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                            backgroundColor: '#C4CC3F',
                            paddingTop: 10,
                            height: 100
                        }}
                        onPress={() => this.props.navigation.navigate('Sceance')}
                    >
                        <Text style={{color: 'white'}}> Démarrer la scéance</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        width: '45%',
                        height: '90%',
                        padding: 25,
                        justifyContent: 'center',
                        borderColor: 'transparent',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        shadowColor: "#000000",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        }
                    }}>
                        <Image source={require('../assets/images/graph.png')}/>
                        <Text>Flexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        padding: 25,
                        width: '45%',
                        height: '90%',
                        justifyContent: 'center',
                        borderColor: 'transparent',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        shadowColor: "#000000",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        }
                    }}>
                        <Image source={require('../assets/images/graph.png')}/>
                        <Text>Statistiques</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        width: '45%',
                        height: '90%',
                        padding: 25,
                        justifyContent: 'center',
                        borderColor: 'transparent',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        shadowColor: "#000000",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        }
                    }}>
                        <Image source={require('../assets/images/message.png')}/>
                        <Text>Messagerie interne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        width: '45%',
                        height: '90%',
                        padding: 25,
                        justifyContent: 'center',
                        borderColor: 'transparent',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        shadowColor: "#000000",
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        }
                    }}>
                        <Image source={require('../assets/images/graph.png')}/>
                        <Text>Historique des scéances</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
