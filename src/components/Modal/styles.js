import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Content = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.9);
`;

export const MovieCoverArea = styled.View`
  flex: 1;
  padding: 8px;
`;

export const MovieCover = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MovieInfo = styled.View`
  flex: 1;
  padding: 8px;
  background: #F0F0F0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #47474D;
  max-width: 90%;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin: 12px 0;
  text-align: justify;
`;

export const AddToCatalogButton = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  padding: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #DC1637;
`;

export const AddToCatalogButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const CloseModal = styled.TouchableOpacity``;
