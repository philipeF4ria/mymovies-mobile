import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/auth';

import { Routes } from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1B1B1F"/>
      <AuthProvider>
        <Routes /> 
      </AuthProvider>
    </NavigationContainer>
  );
}
