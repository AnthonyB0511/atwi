import NumberOfPlayers from './screens/NumberOfPlayer';
import AndTheWinnerIs from './screens/AndTheWinnerIs';
import AboutScreen from './screens/AboutScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={NumberOfPlayers}
        />
        <Stack.Screen name="AndTheWinnerIs" component={AndTheWinnerIs} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
