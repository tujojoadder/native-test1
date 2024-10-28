import { View, Text, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function NormalButton() {
  const [number, setNumber] = useState(10);
  const [name, setName] = useState('');

  // Function without parameter
  const handleOnPress1 = () => {
    setNumber(prev => prev + 1);
    console.warn('Button 1 is clicked');
  };

  // Function to clear the input
  const handleClear = () => {
    console.warn('clear');
    setName('');
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.ab}>
          Hello {number}
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          style={styles.text_input}
        />

        <Button title='Clear text' onPress={handleClear} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ab: {
    fontSize: 24,          // Adjust the font size as needed
    fontWeight: 'bold',    // Make the text bold
    color: '#333',         // Text color
    marginBottom: 10,      // Add some space below the text
  },
  text_input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
