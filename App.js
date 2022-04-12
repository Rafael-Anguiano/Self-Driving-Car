import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Permission from './src/Components/Permission';
import Location from './src/Components/Location';
import MapSc from './src/Components/MapSc';
// import GetLocation from 'react-native-get-location'

const Stack = createNativeStackNavigator();

const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Permission" component={Permission} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Map" component={MapSc}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;