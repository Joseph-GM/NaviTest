import React from 'react'
import { View, Text } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                cardStyle: { backgroundColor: '#ffffff'},
                headerTitle: 'Energy Assist',
                headerStyle: {
                    height: 110,
                    backgroundColor: '#95e5a6',
                    borderBottomWidth: 5,
                    borderBottomColor: '#34495e'
                },
                headerTitleStyle: {color: '#ffffff', fontSize: 24},
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitle: 'Prev'
            }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Detail" component={Item}/>
        </Stack.Navigator>
    )
}
