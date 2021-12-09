import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1B1B1F;
  padding: 16px 8px;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 170px;
  height: 40px;
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
