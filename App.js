import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumberOfPlayers from './screens/NumberOfPlayer';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false // Cache complètement l'en-tête
      }}>
        <Stack.Screen
          name="Home"
          component={NumberOfPlayers}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

