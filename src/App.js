/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EnterCode, EnterPhone, Profile} from './pages';
import {SCREEN_NAMES} from './utils';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={SCREEN_NAMES.ENTER_PHONE}>
        <Stack.Screen name={SCREEN_NAMES.ENTER_PHONE} component={EnterPhone} />
        <Stack.Screen name={SCREEN_NAMES.ENTER_CODE} component={EnterCode} />
        <Stack.Screen name={SCREEN_NAMES.PROFILE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
