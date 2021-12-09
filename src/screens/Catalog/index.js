import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { myMoviesAPI } from '../../services/apis';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import { Container, Title } from './styles';

export function Catalog() {
  const [catalog, setCatalog] = useState([]);
  
  useEffect(() => {
    async function loadCatalog() {
 
      const response = await myMoviesAPI.get('/movies');

      setCatalog(response.data);
    }

    loadCatalog();
  });

  return (
    <Container>
      <Header />
      <Title>Meu Catálogo</Title>
      <FlatList 
        data={catalog}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => <MovieCard 
          data={{
            id: item.id,
            title: item.title,
            overview: item.description,
            poster_path: item.image_url
          }}
        />}
      />
    </Container>
  );
}
