import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 24px;
  background-color: #1B1B1F;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 76px;
`;

export const SignInHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 170px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #7A7A80;
  width: 200px;
  line-height: 25px;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0 48px 0;
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountText = styled.Text`
  font-size: 16px;
  color: #7A7A80;
  align-self: center;
  margin-top: 0px;
`;
