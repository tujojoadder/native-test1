import { View, Text } from 'react-native';
import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export default function ProfileTabBottom({ route }: ProfileScreenProps) {
  const { userId } = route.params; // Access userId parameter here

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileTabBottom</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}
