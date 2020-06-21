import styled from 'styled-components';

import Background from '../../assets/backgrounds/bg1-login.svg';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
`;

export const LoginPageHeader = styled.div`
  width: 100vw;
  height: 37vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
      top: 30px;
    }

    svg:nth-child(1) {
      height: 100%;
      width: 100%;
    }

    svg:nth-child(2) {
      height: 37%;
      width: 28%;
      max-height: 90px;
      position: absolute;
    }
  }

  /* > svg {
    width: 28%;
    height: 90px;
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    
    @media only screen 
    and (min-device-width: 360px) { 
      top: 4vh;
    }
    
    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 
      top: 10vh;
    }
  } */
`;
