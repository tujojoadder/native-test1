import { View, Text, Button } from 'react-native'
import React from 'react'
 import { RootTabTopParamList } from './TopNavigator'
 import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
 type HomeScreenProps = MaterialTopTabScreenProps<RootTabTopParamList, 'Hometoptab'>;

export default function HomeTabNavigator({ navigation }: HomeScreenProps) {

    // Define the props for HomeScreen

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>HomeTabNavigator</Text>
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('Profprofiletoptab', { userId: 123 })}
    />
  </View>
  )
}