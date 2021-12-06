import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
  Container, 
  Content, 
  Title,
  Form,
} from './styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container behavior="position">
      <Header />
      <Content>
        <Title>Faça seu cadastro. É fácil e rápido!</Title>
        <Form>
          <Input
             iconName="user"
             placeholder="Seu Nome"
             autoCorrect={false}
             autoCapitalize="none"
             value={name}
             onChangeText={value => setName(value)}
             returnKeyType="next"
          />

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
          />
        </Form>
      </Content>
    </Container>
  );
}
