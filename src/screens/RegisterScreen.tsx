import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

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

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default RegisterScreen;
