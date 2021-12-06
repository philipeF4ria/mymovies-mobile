import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  padding: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color ? color : '#DC1637'};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ color }) => color ? color : '#FFF'};
`;
