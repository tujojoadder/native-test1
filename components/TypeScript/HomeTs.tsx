import { View, Text } from 'react-native';
import React, { useState } from 'react';
interface MyComponentProps {
  names: string
}
interface MyComponentAgeProps {
  age?: number
}
export default function HomeTs({ names }: MyComponentProps & MyComponentAgeProps) {

  const [name, setName] = useState<number>(10);
  const [person, setPerson] = useState<[string, number,number]>(['Alice', 25,34]);

  const [value, setValue] = useState<unknown>("Hello");

  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe: This works because we checked the type
  }
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
