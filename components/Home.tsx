import { View, Text ,Button, TextInput} from 'react-native'
import React, { useState } from 'react'
import Style from './Style/Style'
import { style } from './Form/Form.style';

export default function Home({navigation}) {
    const [name, setName] = useState('');
  return (
    <View style={Style.container}>
      <Text>Home</Text>

      <TextInput
 
      value={name} // Bind state to the value of TextInput
      onChangeText={(text) => setName(text)} // Update state on text change
      placeholder="Type something..."
    />
      <Button
        onPress={()=>navigation.navigate('login',{name:'Turjo',age:23})}
        title="Login"
        color="#841584"
        disabled={false}
        
      />

      <View style={{ margin:5 }}></View>
      <Button
        onPress={()=>navigation.navigate('tabtop')}
        title="Top tab"
        color="#841584"
        disabled={false}
      />
    </View>
  )
}