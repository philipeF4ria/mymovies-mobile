import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { myMoviesAPI } from '../services/apis';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [token, user] = await AsyncStorage.multiGet([
        '@MyMovies:token',
        '@MyMovies:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });

        myMoviesAPI.defaults.headers.authorization = `Bearer ${token[1]}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn({ email, password }) {
    setLoading(true);

    const signInData = {
      email,
      password,
    };

    const response = await myMoviesAPI.post('/users/auth', signInData);

    const { user, token } = response.data;

    await AsyncStorage.multiSet([
      ['@MyMovies:token', token],
      ['@MyMovies:user', JSON.stringify(user)],
    ]);

    myMoviesAPI.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });

    setLoading(false);
  }

  async function signOut() {
    await AsyncStorage.multiRemove([
      '@MyMovies:token',
      '@MyMovies:user',
    ]);

    setData({});
  }

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
