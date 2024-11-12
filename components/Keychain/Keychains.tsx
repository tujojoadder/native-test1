import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

const Keychains = () => {
  const [token, setToken] = useState('');

  // Function to store the token
  const storeToken = async () => {
    try {
      await Keychain.setGenericPassword('user', 'abc'); // Store token with a unique identifier ('user')
      Alert.alert('Success', 'Token stored successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to store the token');
    }
  };

  // Function to retrieve the token
  const retrieveToken = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      console.log(credentials)
      if (credentials) {
        setToken(credentials.password);
      } else {
        Alert.alert('No Token', 'No token found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve the token');
    }
  };

  // Function to delete the token
  const deleteToken = async () => {
    try {
      await Keychain.resetGenericPassword(); // Clear stored credentials
      setToken('');
      Alert.alert('Success', 'Token deleted successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the token');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Store Token" onPress={storeToken} />
      <Button title="Retrieve Token" onPress={retrieveToken} style={{ marginTop: 20 }} />
      <Button title="Delete Token" onPress={deleteToken} style={{ marginTop: 20 }} />
      
      {token ? (
        <Text style={{ marginTop: 20 }}>Stored Token: {token}</Text>
      ) : (
        <Text style={{ marginTop: 20 }}>No token stored yet.</Text>
      )}
    </View>
  );
};

export default Keychains;
