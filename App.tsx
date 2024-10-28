import React from 'react';

import NormalButton from './components/NormalButton/NormalButton';
import Pressables from './components/Pressable/Pressables';
import ProfessionalButtons from './components/TouchableHighlight/TouchableHighlightComponent';
import MySectionList from './components/SectionList/SectionList';
import Modals from './components/Modal/Modals';
import MapList from './components/MapList/MapList';
import Grid from './components/Grid/Grid';
import Form from './components/Form/Form';
import Flex from './components/Flex/Flex';
import FlatLists from './components/FlatList/FlatLists';
import ActivityIndicators from './components/ActivityIndicator/ActivityIndicators';
import WebView from './components/WebView/WebView';
import StackNavigation from './components/StackNavigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import {View, Text, Button} from 'react-native';
import TabTop from './components/TabTop';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTintColor: 'red',

          animation: 'fade',

          headerTitleStyle: {
            fontSize: 17,
          },
        }}>
        <Stack.Screen
          name="home"
          options={{
            title: 'My Home',
            headerTitle: () => <Button title="Button"></Button>,
            headerRight: () => <Button title="Red"></Button>,
            headerTintColor: 'tomato',
          }}
          component={Home}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'My Login',
          }}
        />

        <Stack.Screen
          name="Pressables"
          component={Pressables}
          options={{
            title: 'Pressable',

            headerTintColor: 'black',
          }}
        />


        <Stack.Screen
          name="tabtop"
          component={TabTop}
          options={{
            title: 'TabTop',

            headerTintColor: 'black',
          }}
        />

        {/* <NormalButton />
      {/* <Pressables /> */}
        {/*  <ProfessionalButtons /> */}
        {/* <MySectionList/> */}
        {/* <MapList/> */}
        {/* <Grid/> */}
        {/* <Form/> */}
        {/* <Flex/> */}
        {/* <FlatLists/> */}
        {/* <ActivityIndicators/> */}
        {/*  <WebView/>   */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
