import React, { useState } from 'react';

import { myMoviesAPI } from '../../services/apis';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
  Container, 
  Content, 
  Title,
  Form,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmitLogin() {
    const data = {
      email,
      password,
    };

    const response = await myMoviesAPI.post('/users/auth', data);

    console.log(response.data);
  }

  return (
    <Container behavior="position">
      <Header />
      <Content>
        <Title>Faça seu login para começar a usar o aplicativo</Title>
        <Form>
          <Input
             iconName="mail"
             placeholder="Seu Email"
             keyboardType="email-address"
             autoCorrect={false}
             autoCapitalize="none"
             value={email}
             onChangeText={value => setEmail(value)}
             returnKeyType="next"
          />

          <Input 
            iconName="lock"
            placeholder="Sua Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="go"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Button 
            title="Entrar"
            onPress={handleSubmitLogin}
          />
        </Form>
      </Content>
    </Container>
  );
}
