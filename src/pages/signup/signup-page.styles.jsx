import styled from 'styled-components';

import Background from '../../assets/backgrounds/bg1.svg';
import BackgroundForm from '../../assets/backgrounds/bg2-alpha.svg';

export const SignupPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ isCleaner }) => isCleaner === null ? Background : BackgroundForm});
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
`;

export const SignupPageHeader = styled.div`
  width: 100vw;
  height: ${({ isCleaner }) => isCleaner === null ? '38vh' : '20vh'};
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: ${({ isCleaner }) => isCleaner === null ? '28%' : '100px'};
    height: 90px;
    position: absolute;
    top: ${({ isCleaner }) => isCleaner === null ? '20vh' : '5vh'};
    left: 50%;
    transform: translateX(-50%);
  }
`;
