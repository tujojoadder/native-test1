import { View, Text } from 'react-native'
import React from 'react'

interface Status1{
    name:string,
}
interface Status2{
    age:number,
}

type Status=Status1 & Status2;

export default function JustUnion({data}:{data:Status}) {
  return (
    <View>
      <Text>JustUnion</Text>
    </View>
  )
}