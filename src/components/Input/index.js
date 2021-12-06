import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, IconContainer, InputText } from './styles';

export function Input({ iconName, value, ...rest }) {
  return (
    <Container>
      <IconContainer>
        <Icon 
          name={iconName}
          size={22}
          color="#DC1637"
        />
      </IconContainer>

      <InputText
        placeholderTextColor="#AEAEB3"
        value={value}
        {...rest}
      />
    </Container>
  );
}
