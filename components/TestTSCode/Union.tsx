import { View, Text } from 'react-native'
import React from 'react'

export interface Status1 {
name:string,
age:number,
subject:'error'|'success'
}

export default function Union({obj}:{obj:Status1}) {
  return (
    <View>
      <Text>Union</Text>
    </View>
  )
}