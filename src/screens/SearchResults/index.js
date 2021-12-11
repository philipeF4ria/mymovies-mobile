import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { LoadingView } from '../../components/LoadingView';
import { MovieCard } from '../../components/MovieCard';

import { Container, Title, } from './styles';

import { key, theMovieDBAPI } from '../../services/apis';

export function SearchResults() {
  const route = useRoute();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const results = await theMovieDBAPI.get('search/movie', {
        params: {
          query: route?.params?.title,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      });

      setMovies(results.data.results);
      setLoading(false);
    }

    loadMovies();
  }, []);

  return loading === true ? <LoadingView /> : (
    <Container>
      <Header />
      <Title>Resultados</Title>
      <FlatList 
        data={movies}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => <MovieCard data={item} action="add"/>}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}
