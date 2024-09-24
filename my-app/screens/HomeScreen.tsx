import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AthleteSearchScreen from './AthleteSearchScreen';
import FavoritePanelScreen from './FavoritePanelScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Pesquisa') {
            iconName = 'search';
          } else if (route.name === 'Favoritos') {
            iconName = 'heart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Pesquisa" component={AthleteSearchScreen} />
      <Tab.Screen name="Favoritos" component={FavoritePanelScreen} />
    </Tab.Navigator>
  );
}
