import styled from 'styled-components';

import Background from '../../assets/backgrounds/bg1.svg';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
`;

export const LoginPageHeader = styled.div`
  width: 100vw;
  height: 34vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > svg {
    width: 28%;
    height: 90px;
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    /* ----------- Galaxy S8 ----------- */
    @media (max-device-width: 360px) { 
      top: 10vh;
    }
    /* ----------- Iphone X ----------- */
    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 
      top: 10vh;
    }
  }
`;
