import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1B1B1F;
  padding: 16px 8px;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 54px;
  margin: 16px 0;
`;

export const Input = styled.TextInput`
  background-color: #34313D;
  border: none;
  width: 85%;
  height: 54px;
  padding: 8px;
  color: #AEAEB3;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #DC1637;
  width: 15%;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.View`
  width: 100%;
  margin: 16px 0;
`;

export const SectionTitle = styled.Text`
  color: #F0F0F0;
  font-size: 24px;
  font-weight: 500;
`;
