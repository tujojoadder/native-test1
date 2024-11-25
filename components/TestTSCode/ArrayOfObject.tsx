import {View, Text} from 'react-native';
import React from 'react';
interface User {
  name: string;
  subject: string[];
}
export default function ArrayOfObject({
  theArrayOfObj,
}: {
  theArrayOfObj: {
    name: string;
    subject: string[];
  }[];
}) {
  return (
    <View>
      <Text>ArrayOfObject</Text>
    </View>
  );
}
