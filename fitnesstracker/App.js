import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Components/WelcomeScreen';
import Login from './Components/Login';
import Creation from './Components/Creation';
import Home from './Components/Home';
import Settings from './Components/Settings';
import SimpleVisuals from './Components/Visuals';
import WorkoutManager from './Components/WorkoutManager'; 
import WorkoutRecommendations from './Components/WorkoutRecommendations';
/*import api from './src/api/client';*/

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Creation" component={Creation} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Visuals" component={SimpleVisuals} />
        <Stack.Screen name="WorkoutManager" component={WorkoutManager} />
        <Stack.Screen name="WorkoutRecommendations" component={WorkoutRecommendations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
*/