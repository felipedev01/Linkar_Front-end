import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { Container, Input, Title } from 'src/styles/RegisterScreen.styles';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3002/api/auth/register', {
        name,
        email,
        password,
        role: 'PASSENGER',
      });
      Alert.alert('Registro bem-sucedido!', 'Agora você pode fazer login.');
    } catch (error) {
      Alert.alert('Erro no registro', 'Tente novamente.');
    }
  };

  return (
    <Container>
      <Title>Registrar-se</Title>
      <Input
        placeholder="Digite seu nome aqui"
        value={name}
        onChangeText={setName}
      />
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
      <Button title="Registrar" onPress={handleRegister} />
    </Container>
  );
};



export default RegisterScreen;
