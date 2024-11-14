
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTabNavigator from './HomeTabNavigator';
import ProfileTabNavigator from './ProfileTabNavigator';
// Define the Stack navigator type for TypeScript
export type RootTabTopParamList = {
    Hometoptab: undefined; // Home screen doesn't expect parameters
    Profprofiletoptab: { userId: number }; // Profile screen expects a `userId` parameter
  };
  
export default function TopNavigator() {
    const Tab = createMaterialTopTabNavigator<RootTabTopParamList>();

    return (
        <Tab.Navigator initialRouteName="Hometoptab">
            <Tab.Screen name="Hometoptab" component={HomeTabNavigator} />
            <Tab.Screen name="Profprofiletoptab" component={ProfileTabNavigator} />
        </Tab.Navigator>
    );
}
