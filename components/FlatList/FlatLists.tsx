import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function FlatLists() {
  const [list, setList] = useState([
    { id: 1, name: 'Aurora' },
    { id: 2, name: 'Blaze' },
    { id: 3, name: 'Clover' },
    { id: 4, name: 'Dynamo' },
    { id: 5, name: 'Echo' },
    { id: 6, name: 'Fable' },
    { id: 7, name: 'Gizmo' },
    { id: 8, name: 'Horizon' },

  ]);


  return (
    <View>
      {/* Header */}
      <Text style={{ fontSize: 30, textAlign: 'center' }}>FlatList</Text>
      <FlatList data={list}
       renderItem={({ item }) => <Text style={{ fontSize: 30, backgroundColor: 'tomato', marginTop: 10, textAlign: 'center', borderRadius: 10 }
      }
      keyExtractor={(item, index) => item.id.toString()}  // item is the actual object
      >{item.name}</Text>} />
    </View>
  );
}
