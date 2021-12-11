import React, { useContext } from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../../contexts/auth';

import logo from '../../assets/logo.png';

import { Container, Logo, SignOutButton } from './styles';

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <Logo source={logo}/>
      <SignOutButton onPress={signOut}>
        <IonIcons name="ios-power" color="#777" size={22} />
      </SignOutButton>
    </Container>
  );
}
