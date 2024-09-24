import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;