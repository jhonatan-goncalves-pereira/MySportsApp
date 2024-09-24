import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';
import PainelFavoritos from '../components/PainelFavoritos';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Buscar Atletas" component={SearchScreen} />
      <Tab.Screen name="Favoritos" component={PainelFavoritos} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
