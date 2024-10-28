import { View, Text,Button } from 'react-native'
import React from 'react'
import Style from './Style/Style'

export default function Login({navigation}) {
  return (
    <View style={Style.container}>
      <Text>Login</Text>


      <Button
        onPress={()=>navigation.navigate('Pressables')}
        title="Add title here"
        color="#841584"
        disabled={false}
      />
    </View>
  )
}