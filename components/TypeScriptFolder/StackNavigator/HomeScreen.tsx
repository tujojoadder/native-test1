import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './StackNavigator';
import {
  Button,
  useTheme,
  ActivityIndicator,
  Appbar,
  Text,
  Badge,
} from 'react-native-paper';
import {Avatar} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Define the props for HomeScreen
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: HomeScreenProps) {
  const theme = useTheme();

  const [isLoading, setIsLoading] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);

  return (
    <View style={{flex: 1}}>
      {/* Custom Appbar */}
      <Appbar.Header style={{backgroundColor: 'tomato'}}>
        <Appbar.Content title="Home" />
        <Text>Profile</Text>
        <Appbar.Action
          icon="account"
          onPress={() => navigation.navigate('Profile', {userId: 123})}
        />
      </Appbar.Header>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: theme.colors.onSurface}}>Home Screen</Text>
        <Text variant="headlineMedium">Display Large</Text>

        <Button
          mode="contained"
          theme={{colors: {primary: 'black', onPrimary: 'orange'}}} // Override theme for this button
          onPress={() => navigation.navigate('Profile', {userId: 123})}>
          Go to Profile
        </Button>
        <Text> </Text>

          {/* Avatar with Badge */}
          <View style={{ position: 'relative' }}>
          <Avatar.Image
            size={64}
            source={{
              uri: 'https://i.pinimg.com/236x/99/0a/1c/990a1cde540708ad43cb2a50b3b1ccf0.jpg',
            }} // Image URL if it loads successfully
            onLoadStart={() => setIsLoading(true)} // Set loading to true when starting to load image
            onLoadEnd={() => setIsLoading(false)} // Set loading to false when image is loaded
            onError={() => {
              setIsLoading(false); // Stop loading if there's an error
              setImageError(true); // Trigger fallback image on error
            }}
          />

          {/* Badge on top of Avatar */}
          <Badge
            size={24}
            style={{
              position: 'absolute',
              top: -4,
              right: -4,
              backgroundColor: 'tomato', // Badge color
            }}>
            3
          </Badge>
        </View>
    
      </View>
    </View>
  );
}
