import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import CardAtleta from './components/CardAtleta';

const SearchScreen = ({ addFavorite }: { addFavorite: (athlete: any) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [athletes, setAthletes] = useState<any[]>([]);

  const searchAthletes = () => {
    // API call using RapidAPI (substitua com sua chave e endpoint)
    fetch(`https://api.example.com/athletes?name=${searchQuery}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api.example.com',
        'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
      }
    })
    .then(response => response.json())
    .then(data => {
      setAthletes(data.results); // Ajuste de acordo com a estrutura da resposta da API
    })
    .catch(error => console.error(error));
  };

  return (
    <View>
      <TextInput
        placeholder="Search for an athlete..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={searchAthletes} />
      <FlatList
        data={athletes}
        renderItem={({ item }) => (
          <CardAtleta athlete={item} addFavorite={addFavorite} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;
