import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import GeoLocation from './Components/GeoLocation';

const Stack = createNativeStackNavigator();

const  MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Details" component={GeoLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;