import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { theMovieDBAPI, key } from '../../services/apis';
import { selectMovies } from '../../utils/selectMovies';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import { 
  Container,
  Content,
  Section,
  SectionTitle,
} from './styles';

export function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([{}]);
  const [popularMovies, setPopularMovies] = useState([{}]);
  const [topRatedMovies, setTopRatedMovies] = useState([{}]);

  useEffect(() => {
    async function getMovies() {
      const [
        nowPlayingMoviesResults, 
        popularMoviesResults,
        topRatedMovies
      ] = await Promise.all([
        theMovieDBAPI.get('movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
        theMovieDBAPI.get('movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
        theMovieDBAPI.get('movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
      ]);

      setNowPlayingMovies(selectMovies(6 , nowPlayingMoviesResults.data.results));
      setPopularMovies(selectMovies(6, popularMoviesResults.data.results));
      setTopRatedMovies(selectMovies(6, topRatedMovies.data.results));
    }

    getMovies();
  }, []);

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
      <Header />
      <Section>
        <SectionTitle>Em Cartaz</SectionTitle>
        <FlatList 
          data={nowPlayingMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard data={item} action="add"/>}
          keyExtractor={(item) => String(item.id)}
        />
      </Section>

      <Section>
        <SectionTitle>Populares</SectionTitle>
        <FlatList 
          data={popularMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard data={item} action="add"/>}
          keyExtractor={item => String(item.id)}
        />
      </Section>

      <Section>
        <SectionTitle>Bem Avaliados</SectionTitle>
        <FlatList 
          data={topRatedMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard data={item} action="add"/>}
          keyExtractor={item => String(item.id)}
        />
      </Section>
      </Content>
    </Container>
  );
}
