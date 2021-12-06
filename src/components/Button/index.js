import React from 'react';

import { Container, Title } from './styles';

export function Button({ title, backgroundColor, fontColor, ...rest }) {
  return (
    <Container color={backgroundColor} activeOpacity={0.7} {...rest}>
      <Title color={fontColor}>{title}</Title>
    </Container>
  );
}
