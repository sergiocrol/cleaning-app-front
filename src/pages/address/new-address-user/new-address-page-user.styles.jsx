import styled from 'styled-components';

import Background from '../../../assets/backgrounds/bg4-alpha.svg';

const textColor = props => props.theme.colors.textColorBlue;

export const NewAddressPageContainer = styled.div`
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
  height: calc(100vh - 60px);
  color: ${textColor};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 10px 0;
    font-size: 1.3rem;
  }

  p {
    width: 90%;
    text-align: center;
    font-size: .8rem;
    color: red;
  }
`;

export const NewAddressPageHeader = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  
  h2 {
    margin: 0 0 10px 0;
    font-size: 1.3rem;
  }
  span {
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const RoomsLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  justify-content: space-around;
  width: 90%;

  span {
    text-align: center;

    select {
      margin-top: 5px;
    }

    svg {
      width: 35px;
    }
  }
`;

export const OthersLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;

  span {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    align-items: center;

    select {
      margin-top: 5px;
      font-size: .8rem;
    }

    svg {
      width: 35px;
    }
  }
`;