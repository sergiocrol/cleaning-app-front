import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Background from '../../assets/backgrounds/bg4-alpha.svg';

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

export const NewAddressPageForm = styled.form`
  width: 90%;
  max-width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-size: .84rem;
    text-align: center;
    color: red;
    margin-bottom: 10px;
  }
`;

export const TwoFieldLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 55px;
  
  div:first-child {
    margin-right: 10px;
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

export const LinkMap = styled(Link)`
  background-color: ${props => props.theme.colors.buttonColor};
  height: 33px;
  width: 80px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const AddressInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 0;
  display: block;
  width: 187px;
  border: none;
  border-radius: 50px;
  height: 35px;
  padding-left: 10px;
  margin-right: 10px;

  ::placeholder {
    color: grey;
    opacity: .5;
  }
`;