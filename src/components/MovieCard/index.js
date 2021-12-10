import React, { useState } from 'react';

import { Modal } from '../Modal';

import { Banner, Container, Title } from './styles';

export function MovieCard({ data, action }) {
  const [modalVisible, setModalVisible] = useState(false);

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
