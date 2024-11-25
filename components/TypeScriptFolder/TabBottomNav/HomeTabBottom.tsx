import { View, Text, Button } from 'react-native';
import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabBottomParamList } from './TabBottomNav';

type HomeScreenProps = BottomTabScreenProps<RootTabBottomParamList, 'HomeBottomTab'>;

export default function HomeTabBottom({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeTabBottom</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfprofileBottomTab', { userId: 123 })}
      />
    </View>
  );
}
