import React from 'react';
import { View, Text, Button } from 'react-native';
import { Container, Subtitle, Title } from 'src/styles/WelcomeScreen.styles';
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


export default WelcomeScreen;
