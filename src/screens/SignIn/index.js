import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import { myMoviesAPI } from '../../services/apis';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
  Container, 
  Content, 
  Title,
  Form,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

export function SignIn() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleSubmitLogin() {
    const data = {
      email,
      password,
    };

    const response = await signIn(data);
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
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <CreateAccountText>Criar uma conta</CreateAccountText>
        </CreateAccountButton>
      </Content>
    </Container>
  );
}
