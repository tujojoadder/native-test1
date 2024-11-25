import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTabBottom from './HomeTabBottom';
import ProfileTabBottom from './ProfileTabBottom';

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeBottomTab"
      screenOptions={{
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: '#6c757d',
        tabBarStyle: {
          backgroundColor: '#f8f9fa',
          height: 57,
        
          padding: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        
      }}
    >
      <Tab.Screen
        name="HomeBottomTab"
        component={HomeTabBottom}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfprofileBottomTab"
        component={ProfileTabBottom}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MainFeature"
        component={ProfileTabBottom}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={styles.circleIcon}>
              <MaterialCommunityIcons name="star" color="#fff" size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ProfileTabBottom}
        options={{
          tabBarLabel: 'Alerts',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileTabBottom}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  circleIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    justifyContent: 'center',
    marginTop:27,
    alignItems: 'center',
    marginBottom: 10, // Adjust to make it pop above the tab bar
  },
});