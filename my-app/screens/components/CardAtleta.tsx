import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const CardAtleta = ({ athlete, addFavorite }: { athlete: any; addFavorite: (athlete: any) => void }) => {
  return (
    <View>
      <Text>{athlete.name}</Text>
      <Image source={{ uri: athlete.image }} style={{ width: 100, height: 100 }} />
      <Button title="Add to Favorites" onPress={() => addFavorite(athlete)} />
    </View>
  );
};

export default CardAtleta;
