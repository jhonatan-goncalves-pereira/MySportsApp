import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const CardAtleta = ({ atleta }) => {
  return (
    <View>
      <Text>{atleta.name}</Text>
      <Image source={{ uri: atleta.image }} style={{ width: 100, height: 100 }} />
      <Button title="Adicionar aos Favoritos" onPress={() => { /* Adicione lógica para favoritos */ }} />
    </View>
  );
};

export default CardAtleta;