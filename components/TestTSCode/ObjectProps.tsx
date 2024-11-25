import { View, Text } from 'react-native'
import React from 'react'

interface User{
    name:string,
    subject:string[]
}

export default function ObjectProps({details}:{details:User}) {
  return (
    <View>
      <Text>ObjectProps</Text>
    </View>
  )
}