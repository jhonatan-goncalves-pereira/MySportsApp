import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

type AthleteProps = {
  atleta: {
    id: number;
    name: string;
    image: string;
  };
};

export default function CardAtleta({ atleta }: AthleteProps) {
  const addToFavorites = () => {
    // Adicionar o atleta aos favoritos (array)
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: atleta.image }} style={styles.image} />
      <Text>{atleta.name}</Text>
      <Button title="Adicionar aos Favoritos" onPress={addToFavorites} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, borderWidth: 1, borderColor: '#ddd', marginBottom: 10 },
  image: { width: 100, height: 100, marginBottom: 10 }
});
