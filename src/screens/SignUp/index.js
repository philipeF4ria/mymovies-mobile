import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import { myMoviesAPI } from '../../services/apis';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
  Container, 
  Content,
  SignUpHeader,
  Logo, 
  Title,
  Form,
  BackToSignInButton,
  BackToSignInText,
} from './styles';

export function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmitSignUp() {
    const data = {
      name,
      email,
      password,
    };

    await myMoviesAPI.post('/users', data);

    navigation.goBack();
  }

  return (
    <Container behavior="position">
      <SignUpHeader>
        <Logo source={logo} />
      </SignUpHeader>
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
            title="Cadastrar"
            onPress={handleSubmitSignUp}
          />
        </Form>
        <BackToSignInButton onPress={() => navigation.goBack()}>
          <BackToSignInText>Voltar para Login</BackToSignInText>
        </BackToSignInButton>
      </Content>
    </Container>
  );
}
