import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Container>
      {/* <Logo source={require('../../assets/logo.png')} /> */}
      <Title>Bem vindo a LinKar!</Title>
      <Subtitle>
        Compartilhe caminhos, economize tempo e contribua para um futuro sustentável.
      </Subtitle>
      <Button title="Avançar" onPress={() => navigation.navigate('Login')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: green;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  color: #666;
`;

export default WelcomeScreen;
