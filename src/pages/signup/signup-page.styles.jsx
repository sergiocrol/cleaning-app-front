import styled from 'styled-components';

import Header from '../../assets/signup-page/header.png';

export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const height = (props) => {
  return props.isCleaner
    ? 28
    : 34;
}
const backgroundPosition = (props) => {
  return props.isCleaner
    ? 'background-position: bottom'
    : null;
}

export const SignupPageHeader = styled.div`
  width: 100vw;
  height: ${height}vh;
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
  ${backgroundPosition}
`;
