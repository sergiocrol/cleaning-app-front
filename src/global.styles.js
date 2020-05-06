import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    // font-family: 'Open Sans Condensed';
    background-color: ${props => props.theme.colors.background};
    font-size: 100%;
    // padding: 20px 60px;

    // @media screen and (max-width: 800px) {
    //   padding: 10px;
    // }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;