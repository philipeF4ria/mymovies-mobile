import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import { Container, Title } from './styles';

export function Catalog() {
  const [catalog, setCatalogs] = useState([
    {
      id: '1',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      image_url: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    },
    {
      id: '2',
      title: 'Harry Potter and the Prisoner of Azkaban',
      image_url: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg',
    },
    {
      id: '3',
      title: 'Star Wars: Episode IV - A New Hope',
      image_url: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      id: '4',
      title: 'Spider-Man',
      cover: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
    },
  ])

  return (
    <Container>
      <Header />
      <Title>Meu Catálogo</Title>
      <FlatList 
        data={catalog}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => <MovieCard data={item} />}
      />
    </Container>
  );
}
