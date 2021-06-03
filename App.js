/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/Home';
import AddNote from './src/views/AddNote';
import Edit from './src/views/Edit';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNote" component={AddNote} />
        <Stack.Screen name="EditNote" component={Edit} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
