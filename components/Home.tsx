import { View, Text ,Button} from 'react-native'
import React from 'react'
import Style from './Style/Style'

export default function Home({navigation}) {
  return (
    <View style={Style.container}>
      <Text>Home</Text>


      <Button
        onPress={()=>navigation.navigate('login')}
        title="Add title here"
        color="#841584"
        disabled={false}
      />
    </View>
  )
}