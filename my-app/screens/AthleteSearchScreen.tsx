import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import CardAtleta from './components/CardAtleta';

type Athlete = {
  id: number;
  name: string;
  image: string;
};

export default function AthleteSearchScreen() {
  const [search, setSearch] = useState<string>('');
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  const searchAthletes = () => {
    // Chamar API da RapidAPI para buscar atletas
    fetch(`https://api.exemplo.com/athletes?name=${search}`, {
      headers: { 'X-RapidAPI-Key': 'SUA_CHAVE_DE_API_AQUI' }
    })
    .then(response => response.json())
    .then(data => setAthletes(data.results))
    .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar atleta"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <Button title="Buscar" onPress={searchAthletes} />
      <FlatList
        data={athletes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardAtleta atleta={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }
});
