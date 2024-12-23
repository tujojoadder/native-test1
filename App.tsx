import React from 'react';

import NormalButton from './components/NormalButton/NormalButton';
import Pressables from './components/Pressable/Pressables';
import ProfessionalButtons from './components/TouchableHighlight/TouchableHighlightComponent';
import MySectionList from './components/SectionList/SectionList';
import MapList from './components/MapList/MapList';
import Grid from './components/Grid/Grid';
import Form from './components/Form/Form';
import Flex from './components/Flex/Flex';
import FlatLists from './components/FlatList/FlatLists';
import ActivityIndicators from './components/ActivityIndicator/ActivityIndicators';
import WebView from './components/WebView/WebView';
import {NavigationContainer} from '@react-navigation/native';
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
import { enableScreens } from 'react-native-screens';
import StackNavigator from './components/TypeScriptFolder/StackNavigator/StackNavigator';
import TopNavigator from './components/TypeScriptFolder/TopNavigator/TopNavigator';
import TabBottomNav from './components/TypeScriptFolder/TabBottomNav/TabBottomNav';
import Counter from './components/CounterComponent/CounterComponent';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  colors: {
    onPrimary: 'yellow', // Text color on primary backgrounds
    primary: 'red',
    onSurface:'black' ,
    onBackground: 'darkgray',

},
};

if (__DEV__) {
  require('./ReactotronConfig');
}
enableScreens();
export default function App() {

  return (
    <PaperProvider theme={theme}>
    <Provider store={store}>
      <NavigationContainer>
        <TabBottomNav/>
    {/*  <StackNavigator/> */}
      {/*   <TabBottomNav/> */}
      </NavigationContainer>
    </Provider>
    </PaperProvider>
  );
}
