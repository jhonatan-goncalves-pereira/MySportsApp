import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (athlete: any) => {
    setFavorites([...favorites, athlete]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search">
          {() => <SearchScreen addFavorite={addFavorite} />}
        </Tab.Screen>
        <Tab.Screen name="Favorites">
          {() => <FavoritesScreen favorites={favorites} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
