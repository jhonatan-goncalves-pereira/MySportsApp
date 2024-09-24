import React from 'react';
import { View, FlatList } from 'react-native';
import CardAtleta from './components/CardAtleta';

const FavoritesScreen = ({ favorites }: { favorites: any[] }) => {
  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <CardAtleta athlete={item} addFavorite={() => {}} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
