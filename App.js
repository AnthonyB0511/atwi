import NumberOfPlayers from './screens/NumberOfPlayer';
import AndTheWinnerIs from './screens/AndTheWinnerIs';
import AboutScreen from './screens/AboutScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from '@use-expo/font';
import * as SplashScreen from 'expo-splash-screen';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'ProtestRiot': require('./assets/fonts/ProtestRiot-Regular.ttf')
  });

  React.useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplash();
    return () => {
      hideSplash();
    };
  }, [fontsLoaded, fontError]);

  // Render the app contents
  if (!fontsLoaded && !fontError) {
    return null; // Render nothing until fonts are loaded or an error occurs
  }
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
