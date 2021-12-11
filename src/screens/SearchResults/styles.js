import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1B1B1F;
  padding: 16px 8px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #F0F0F0;
  font-size: 24px;
  font-weight: 500;
  margin: 16px 0;
`;

export const BackToExplorerButton = styled.TouchableOpacity``;
