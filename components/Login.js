import {View, Text, Button} from 'react-native';
import React from 'react';
import Style from './Style/Style';

export default function Login({navigation, route}) {
  const {name, age} = route.params;
  return (
    <View style={Style.container}>
      <Text style={{fontSize: 20, padding: 5}}>Login Page</Text>
      <Text style={{fontSize: 20, padding: 5}}>My name is : {name}</Text>
      <Text style={{fontSize: 20, padding: 5}}>My age is : {age}</Text>

      <Button
        onPress={() => navigation.navigate('Pressables')}
        title="Add title here"
        color="#841584"
        disabled={false}
      />
    </View>
  );
}
