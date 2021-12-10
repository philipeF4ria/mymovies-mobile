import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { myMoviesAPI } from '../../services/apis';

import { 
  Container, 
  Content,
  MovieCoverArea,
  MovieCover,
  MovieInfo,
  Header,
  Title,
  CloseModal,
  Description,
  AddToCatalogButton,
  AddToCatalogButtonTitle,
} from './styles';

export function Modal({ isVisible, closeModal, data, action }) {
  
  async function handleAddToCatalog() {
    const movieData = {
      id: String(data.id),
      title: data.title,
      description: data.overview,
      image_url: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
    }

    await myMoviesAPI.post('/movies', movieData);
  }

  console.log(`ACTION -> ${action}`);

  async function handleRemoveFromCatalog() {
    await myMoviesAPI.delete(`/movies/${data.id}`);
  }

  return (
    <Container visible={isVisible} animationType="slide" transparent={true}>
      <Content>
        <MovieCoverArea>
          <MovieCover 
            source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
          />
        </MovieCoverArea>
        <MovieInfo>
          <Header>
            <Title>{data.title}</Title>
            <CloseModal>
              <Icon name="x" size={26} color="red" onPress={closeModal}/>
            </CloseModal>
          </Header>
          <Description>{data.overview}</Description>
        </MovieInfo>
        {
        action === 'add' ? (
          <AddToCatalogButton activeOpacity={0.7} onPress={handleAddToCatalog}>
            <AddToCatalogButtonTitle>
              Adicionar ao Catálogo
            </AddToCatalogButtonTitle>
          </AddToCatalogButton>
        ) : (
          <AddToCatalogButton activeOpacity={0.7} onPress={handleRemoveFromCatalog}>
            <AddToCatalogButtonTitle>
              Remover do Catálogo
            </AddToCatalogButtonTitle>
          </AddToCatalogButton>
        )
        }
      
      </Content>
    </Container>
  );
}
