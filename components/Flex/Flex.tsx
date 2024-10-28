import { View, Text, SafeAreaView, Alert, ScrollView } from 'react-native';
import React from 'react'

export default function Flex() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',flexGrow:1  }}>
      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 1 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 2 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 3 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 4 space
        </Text>
      </View>
      
      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 4 space
        </Text>
      </View>

      {/* Add more views as needed */}
      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 5 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 6 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 7 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 50% space
        </Text>
      </View>
      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 50% space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 50% space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 17 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 18 space
        </Text>
      </View>

      {/* Add more views as needed */}
      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 19 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 20 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'tomato' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          This takes 21 space
        </Text>
      </View>

      <View style={{ height: 200, width: 80, margin: 10, backgroundColor: 'blue' }}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
          This takes 22 space
        </Text>
      </View>
      {/* Continue adding more items if needed */}
    </ScrollView>
  </SafeAreaView>
  )
}