// screens/SearchScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';
import CardAtleta from '../components/CardAtleta';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [atletas, setAtletas] = useState([]);
  const [error, setError] = useState('');

  const buscarAtletas = async () => {
    try {
      const response = await axios.get(`https://api.sportsdata.io/v4/players/search?query=${query}`, {
        headers: {
          'User-Agent': 'MyApp', // Utiliza um User-Agent para evitar bloqueios
        },
      });
      setAtletas(response.data);
      setError('');
    } catch (err) {
      setError('Erro ao buscar atletas. Tente novamente.');
    }
  };

  return (
    <View>
      <TextInput 
        placeholder="Pesquisar Atleta" 
        onChangeText={setQuery} 
      />
      <Button title="Buscar" onPress={buscarAtletas} />
      {error ? <Text>{error}</Text> : null}
      <FlatList
        data={atletas}
        renderItem={({ item }) => <CardAtleta atleta={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchScreen;
