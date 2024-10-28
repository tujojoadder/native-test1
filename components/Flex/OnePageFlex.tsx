import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

export default function OnePageFlex() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

       {/* flexDirection: 'row' */}
        <View style={{ height: 200, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'tomato' }}></View>
          <View style={{ flex: 1, backgroundColor: 'green' }}></View>
          <View style={{ flex: 1, backgroundColor: 'black' }}></View>
        </View>

        
        <View style={{ height: 200, backgroundColor: 'blue' }}></View>
        <View style={{ height: 400, backgroundColor: 'red' }}></View>

       {/* flexDirection: 'row' */}

        <View style={{ height: 200, flexDirection: 'row' }}>
        <View style={{ flex: 2, backgroundColor: 'black' }}></View>
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
        </View>
       { /* flexDirection: 'row' */}
        <View style={{ height: 200, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'tomato' }}></View>
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
        <View style={{ flex: 1, backgroundColor: 'black' }}></View>
        </View>



        
      </ScrollView>
    </SafeAreaView>
  );
}
