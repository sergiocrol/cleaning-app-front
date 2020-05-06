import styled from 'styled-components';

import Header from '../../assets/signup-page/header.png';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPageHeader = styled.div`
  width: 100vw;
  height: 34vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Header});
  background-size: cover;
`;
