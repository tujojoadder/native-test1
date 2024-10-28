import { View, Text, Button, FlatList } from 'react-native';
import React from 'react';
import Style from './Style/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapList from './MapList/MapList';
import ActivityIndicators from '../ActivityIndicator/ActivityIndicators';
import FlatLists from '../FlatList/FlatLists';
import Grid from '../Grid/Grid';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Ensure correct icon set is used
import AntDesign from 'react-native-vector-icons/AntDesign'; // Ensure correct icon set is used

export default function Login({ navigation, route }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Customize the font
        headerShown: false,
        tabBarShowLabel: true, // to show the label along with icon
        tabBarActiveTintColor: 'tomato', // active icon color
        tabBarInactiveTintColor: 'gray', // inactive icon color
      }}
    >
      <Tab.Screen
        name="Homes"
        component={Grid}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ActivityIndicators}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
