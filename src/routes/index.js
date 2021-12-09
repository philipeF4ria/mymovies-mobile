import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import { LoadingView } from '../components/LoadingView';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingView />
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}
