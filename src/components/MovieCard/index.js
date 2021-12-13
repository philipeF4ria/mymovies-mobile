import React, { useState, useEffect } from 'react';

import { Modal } from '../Modal';

import { Banner, Container, Title } from './styles';

import { myMoviesAPI } from '../../services/apis';

export function MovieCard({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [action, setAction] = useState('remove');

  useEffect(() => {
    async function loadData() {
      const movieId = data.id;

      const response = await myMoviesAPI.get(`/movies/${movieId}`);

      if (response.data === '') {
        setAction('add');
      }
    }

    loadData();
  });

  function handleToggleModal() {
    setModalVisible(prevState => !prevState);
  }

  return (
    <Container activeOpacity={0.7} onPress={handleToggleModal}>
      <Banner
        resizeMethod="resize"
        resizeMode="center"
        source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
      />
      <Title>{data.title}</Title>

      <Modal 
        isVisible={modalVisible} 
        closeModal={handleToggleModal}
        data={data}
        action={action}
      />
    </Container>
  );
}
