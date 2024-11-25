import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
// Define the Stack navigator type for TypeScript
export type RootStackParamList = {
  Home: undefined; // Home screen doesn't expect parameters
  Profile: { userId: number }; // Profile screen expects a `userId` parameter
};

export default function StackNavigator() {
const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
     screenOptions={{
        headerShown: false, // Disable the default app bar
      }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
  )
}