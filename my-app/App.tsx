import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import AthleteSearchScreen from './screens/AthleteSearchScreen';
import FavoritePanelScreen from './screens/FavoritePanelScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pesquisa" component={AthleteSearchScreen} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name="search" color={color} size={size} />)
      }} />
      <Tab.Screen name="Favoritos" component={FavoritePanelScreen} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name="heart" color={color} size={size} />)
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}>
          {() => <HomeTabs />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
