import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Flex from './Flex/Flex';
import Form from './Form/Form';
import FlatLists from './FlatList/FlatLists';
import Grid from './Grid/Grid';
import MySectionList from './SectionList/SectionList';


export default function TabTop() {
    const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarScrollEnabled: true,  // Enables horizontal scrolling
      tabBarIndicatorStyle: { backgroundColor: 'blue', height: 3 }, // Customize the indicator
      tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Customize the font

      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={Flex} />
    <Tab.Screen name="Add Friend" component={Form} />
    <Tab.Screen name="FlatList" component={FlatLists} />
    <Tab.Screen name="Grid" component={Grid} />
    <Tab.Screen name="Add List" component={MySectionList} />
  </Tab.Navigator>
  );
}