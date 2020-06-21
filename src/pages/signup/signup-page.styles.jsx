import styled from 'styled-components';

import BackgroundLogin from '../../assets/backgrounds/bg1-login.svg';
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
  min-height: -moz-fill-available;
  min-height: fill-available;
  background-image: url(${({ isCleaner }) => isCleaner === null ? BackgroundLogin : BackgroundForm});
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

  div:nth-child(1) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div {
      width: 100%;
      height: 89%;
      max-height: 210px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: ${({ isCleaner }) => (isCleaner === null ? '30px' : null)};
    }

    svg:nth-child(1) {
      width: 100%;
      height: ${({ isCleaner }) => (isCleaner === null ? '100%' : '60%')};
    }

    svg:nth-child(2) {
      height: 37%;
      width: 28%;
      max-height: 90px;
      position: absolute;
    }
  }
  
  /* @media only screen 
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
    
    @media only screen 
    and (min-device-width: 360px) { 
      top: ${({ isCleaner }) => (isCleaner === null ? '8vh' : '3vh')};
    }
    
    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 
      top: ${({ isCleaner }) => (isCleaner === null ? '20vh' : '5vh')};
    }
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
`;