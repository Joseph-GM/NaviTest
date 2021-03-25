import React from 'react'
import { View, Text } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Item" component={Item}/>
        </Stack.Navigator>
    )
}
