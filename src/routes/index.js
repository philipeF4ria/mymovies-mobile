import React, { useContext } from 'react';

import { AuthContext } from '../contexts/auth';

import { LoadingView } from '../components/LoadingView';

import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';

export function Routes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingView />
  }

  return user ? <AppTabRoutes /> : <AuthRoutes />;
}
