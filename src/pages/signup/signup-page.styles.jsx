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
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-image: url(${({ isCleaner }) => isCleaner === null ? Background : BackgroundForm});
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
`;

export const SignupPageHeader = styled.div`
  width: 100vw;
  height: ${({ isCleaner }) => (isCleaner === null ? '30vh' : '20vh')};
  display: flex;
  justify-content: center;
  align-items: center;
  /* ----------- iPhone X ----------- */
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    height: ${({ isCleaner }) => (isCleaner === null ? '38vh' : '20vh')};
  }

  > svg {
    width: ${({ isCleaner }) => (isCleaner === null ? '28%' : '100px')};
    height: 90px;
    position: absolute;
    top: ${({ isCleaner }) => (isCleaner === null ? '10vh' : '3vh')};
    left: 50%;
    transform: translateX(-50%);
    /* ----------- Galaxy S8 ----------- */
    @media only screen 
    and (min-device-width: 360px) { 
      top: ${({ isCleaner }) => (isCleaner === null ? '8vh' : '3vh')};
    }
    /* ----------- iPhone X----------- */
    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 
      top: ${({ isCleaner }) => (isCleaner === null ? '20vh' : '5vh')};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
`;