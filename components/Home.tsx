import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import Style from './Style/Style';

export default function Home({navigation}) {
  const [name, setName] = useState('');
  return (
    <View style={Style.container}>
      <Text>Home</Text>

      <TextInput
        value={name} // Bind state to the value of TextInput
        onChangeText={text => setName(text)} // Update state on text change
        placeholder="Type something..."
      />
      <Button
        onPress={() => navigation.navigate('login', {name, age: 23})}
        title="Add title here"
        color="#841584"
        disabled={false}
      />
    </View>
  );
}
