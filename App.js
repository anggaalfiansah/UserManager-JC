import React from 'react';
import Form from './src/components/FormScreen/Form';
import Home from './src/components/HomeScreen/Home';
import FormUpdate from './src/components/UpdateScreen/FormUpdate';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Detail from './src/components/DetailScreen/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Update" component={FormUpdate} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
