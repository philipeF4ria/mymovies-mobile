import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

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

export function Modal({ isVisible, closeModal, data }) {
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
        <AddToCatalogButton>
          <AddToCatalogButtonTitle activeOpacity={0.7}>
            Adicionar ao Catálogo
          </AddToCatalogButtonTitle>
        </AddToCatalogButton>
      </Content>
    </Container>
  );
}
