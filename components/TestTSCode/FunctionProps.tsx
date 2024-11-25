import { View, Text } from 'react-native'
import React from 'react'

export default function FunctionProps({displayConsole,name}:{name:string,displayConsole:() => number}) {

    displayConsole();
  return (
    <View>
      <Text>FunctionProps</Text>
    </View>
  )
}
