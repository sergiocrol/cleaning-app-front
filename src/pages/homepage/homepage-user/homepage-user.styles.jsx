import styled from 'styled-components';

import backg from '../../../assets/backgrounds/bg4-alpha.svg';

export const HomepageContainer = styled.div`
  padding: 15px;
  /* background-image: url(${backg});
  background-size: cover;
  background-position: top;
  background-attachment: fixed; */
`;

export const ImageBackground = styled.img`
  min-height: calc(100vh - 60px);
  z-index: -99;
  width: 105%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`;
