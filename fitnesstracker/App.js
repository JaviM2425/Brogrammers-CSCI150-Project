import React, { useEffect, useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomeScreen from './Components/WelcomeScreen';
import Login from './Components/Login';
import Creation from './Components/Creation';
import Home from './Components/Home';
import Settings from './Components/Settings';
import SimpleVisuals from './Components/Visuals';
import WorkoutManager from './Components/WorkoutManager';
import WorkoutRecommendations from './Components/WorkoutRecommendations';

export const AuthContext = createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  // Check whether a user is already logged in
  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("user");
      setLoggedIn(!!user);
      setLoading(false);
    };
    checkLogin();
  }, []);

  const login = async (user) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setLoggedIn(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setLoggedIn(false);
  };

  if (loading) return <></>;

  return (
  <AuthContext.Provider value={{ loggedIn, login, logout }}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!loggedIn ? (
            <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Creation" component={Creation} />
            </>
            ) : (
            <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Visuals" component={SimpleVisuals} /> 
            <Stack.Screen name="WorkoutManager" component={WorkoutManager} />
            <Stack.Screen name="WorkoutRecommendations" component={WorkoutRecommendations} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </AuthContext.Provider>
  );
}

/*
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
*/