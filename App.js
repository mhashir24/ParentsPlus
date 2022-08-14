import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "././screen/Login Page";
import CardHolder from './screen/CardHolder';
import FilterEvents from './screen/FilterEvents';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CardHolder">
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="CardHolder" component={CardHolder} />
        <Stack.Screen name="FilterEvents" component={FilterEvents} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;