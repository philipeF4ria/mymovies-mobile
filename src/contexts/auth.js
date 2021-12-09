import React, { createContext, useState } from 'react';

import { myMoviesAPI } from '../services/apis';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function signIn({ email, password }) {
    setLoading(true);

    const signInData = {
      email,
      password,
    };

    const response = await myMoviesAPI.post('/users/auth', signInData);

    const { user, token } = response.data;

    myMoviesAPI.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });

    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
