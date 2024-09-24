import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Athlete = {
  id: number;
  name: string;
};

type FavoritePanelScreenProps = {
  route: {
    params: {
      favorites: Athlete[];
    };
  };
};

export default function FavoritePanelScreen({ route }: FavoritePanelScreenProps) {
  const { favorites } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  favoriteItem: { padding: 10, borderWidth: 1, borderColor: '#ddd', marginBottom: 10 }
});
