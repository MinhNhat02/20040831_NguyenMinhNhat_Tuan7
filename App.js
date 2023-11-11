import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import screen1 from './source/screen1.js';
import screen2 from './source/screen2.js';
import screen3 from './source/screen3.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="screen1" component={screen1} options={{headerShown : false}} />
              <Stack.Screen name="screen2" component={screen2} options={{headerTitle : ""}} />
              <Stack.Screen name="screen3" component={screen3} options={{headerTitle : ""}}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}