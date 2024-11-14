import { View, Text } from 'react-native'
import React from 'react'
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { RootTabTopParamList } from './TopNavigator'
// Define the props for ProfileScreen, including route
type ProfileScreenProps = MaterialTopTabScreenProps<RootTabTopParamList, 'Profprofiletoptab'>;

export default function ProfileTabNavigator({ route }: ProfileScreenProps) {
    const { userId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
    <Text>User ID: {userId}</Text>
  </View>
  )
}