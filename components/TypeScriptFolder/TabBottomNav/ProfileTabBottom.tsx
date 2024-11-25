import { View, Text } from 'react-native';
import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export default function ProfileTabBottom({ route }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileTabBottom</Text>
      <Text>User ID: hmm</Text>
    </View>
  );
}
