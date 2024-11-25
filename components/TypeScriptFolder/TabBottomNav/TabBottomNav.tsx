import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, BottomNavigation } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNavigator() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'profile', title: 'Profile', icon: 'account' },
    { key: 'setting', title: 'Setting', icon: 'cog' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeTabBottom,
    profile: ProfileTabBottom,
    setting: SettingTabBottom,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={({ route, color }) => {
        const iconSize = route.key === 'profile' ? 36 : 22;
        return (
          <MaterialCommunityIcons
            name={route.icon}
            color={color}
            size={iconSize}
          />
        );
      }}
      barStyle={styles.bottomNavBar}
      activeColor="tomato"
      inactiveColor="gray"
    />
  );
}

function HomeTabBottom() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Home Screen</Text>
    </View>
  );
}

function ProfileTabBottom() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Profile Screen</Text>
    </View>
  );
}

function SettingTabBottom() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Setting Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavBar: {
    backgroundColor: '#ffffff',
    height: 53,
    paddingBottom: 2,
    
    justifyContent: 'center',

  },
});
