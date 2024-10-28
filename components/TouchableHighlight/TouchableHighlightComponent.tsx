import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ProfessionalButtons() {

  // Event handlers
  const handlePress = () => Alert.alert('Button Pressed');
  const handleLongPress = () => Alert.alert('Button Long Pressed');

  return (
    <View style={styles.container}>
      {/* TouchableHighlight Button */}
      <TouchableHighlight
        style={styles.highlightButton} // Custom button styling
        onPress={handlePress} // Short press action
        onLongPress={handleLongPress} // Long press action
        underlayColor={'black'} // Color shown when pressed
        activeOpacity={0.8} // Opacity when touched
      >
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </TouchableHighlight>

      {/* TouchableOpacity Button */}
      <TouchableOpacity
        style={styles.opacityButton} // Custom button styling
        onPress={handlePress} // Short press action
        onLongPress={handleLongPress} // Long press action
        activeOpacity={0.7} // Button opacity when pressed
      >
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  highlightButton: {
    backgroundColor: '#008080', // Default button background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000', // Shadow for a professional look
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  opacityButton: {
    backgroundColor: '#4682B4', // Default button background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000', // Shadow for a professional look
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
