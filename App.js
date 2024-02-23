import NumberOfPlayers from './screens/NumberOfPlayer';
import AndTheWinnerIs from './screens/AndTheWinnerIs';
import AboutScreen from './screens/AboutScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simuler un chargement initial de 2 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false// Affiche l'en-tête seulement si le chargement est terminé
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
