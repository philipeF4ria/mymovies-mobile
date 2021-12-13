import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { theMovieDBAPI, key } from '../../services/apis';
import { selectMovies } from '../../utils/selectMovies';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import { 
  Container,
  Content,
  SearchContainer,
  Input,
  SearchButton,
  Section,
  SectionTitle,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const [nowPlayingMovies, setNowPlayingMovies] = useState([{}]);
  const [popularMovies, setPopularMovies] = useState([{}]);
  const [topRatedMovies, setTopRatedMovies] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

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

  function handleSearchMovies() {
    if (inputValue === '') return;

    navigation.navigate('SearchResults', { title: inputValue });

    setInputValue('');
  }

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
      <Header />

      <SearchContainer>
        <Input 
          placeholder="Qual filme você procura?"
          placeholderTextColor="#AEAEB3"
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <SearchButton onPress={handleSearchMovies}>
          <IonIcons name="search" size={28} color="#F0F0F0" />
        </SearchButton>
      </SearchContainer>

      <Section>
        <SectionTitle>Em Cartaz</SectionTitle>
        <FlatList 
          data={nowPlayingMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard data={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </Section>

      <Section>
        <SectionTitle>Populares</SectionTitle>
        <FlatList 
          data={popularMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard data={item} />}
          keyExtractor={item => String(item.id)}
        />
      </Section>

      <Section>
        <SectionTitle>Bem Avaliados</SectionTitle>
        <FlatList 
          data={topRatedMovies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard data={item} />}
          keyExtractor={item => String(item.id)}
        />
      </Section>
      </Content>
    </Container>
  );
}
