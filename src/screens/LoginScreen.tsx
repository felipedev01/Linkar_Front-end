import React, { useState } from 'react';
import { View, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Container, Input, LinkText, Title } from 'src/styles/LoginScreen.styles';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3002/api/auth/login', {
        email,
        password,
      });
      Alert.alert('Login bem-sucedido!', `Token: ${response.data.token}`);
      // Salve o token e navegue para a próxima tela
    } catch (error) {
      Alert.alert('Erro no login', 'Verifique suas credenciais');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Digite seu email aqui"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Digite sua senha aqui"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <LinkText>Registre-se</LinkText>
      </TouchableOpacity>
    </Container>
  );
};
export default LoginScreen;
