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
import {Provider} from 'react-redux';
import {store} from './src/store';
import Group from './components/Group/Group';
import Keychains from './components/Keychain/Keychains';
import { Redux } from './components/Redux/Redux';
import CreatePost from './components/CreatePost/CreatePost';
import Permission from './components/Permition/Permition';
if (__DEV__) {
  require('./ReactotronConfig');
}
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Group /> */}
        <Permission/>
      </NavigationContainer>
    </Provider>
  );
}
