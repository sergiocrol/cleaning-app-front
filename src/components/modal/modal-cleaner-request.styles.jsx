import styled from 'styled-components';

import CleanerImage from '../../assets/signup-page/cleaner-avatar.svg';

export const ModalRequestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ModalRequestHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h4 {
    color: ${props => props.theme.colors.textColorBlue};
    font-weight: lighter;
  }

  span {
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const ProfileCleanerImage = styled.div`
  /* width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.buttonColor}; */
  width: 90px;
  height: 90px;
  background-color: ${(props) => props.theme.colors.buttonColor};
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-image: url(${({ picture }) => picture ? picture : CleanerImage});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat; 
  overflow: hidden;
`;

export const ModalRequestBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 20px 15px;
  margin: 20px 0 10px 0;
  color: ${props => props.theme.colors.textColorBlue};
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;

export const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
    
  div:nth-child(1) {
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    span {
      font-size: .9rem;
      margin-top: 6px;
    }

  }

  div:nth-child(2) {
    font-size: 1.4rem;
    margin-top: 15px;
  }
`;

export const Kilometers = styled.span`
  margin-right: 18px;
`;

export const PriceInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  span {
    font-size: 1rem;
    font-weight: lighter;
  }
`;

export const ModalRequestFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: ${props => props.theme.colors.textColorBlue};
      font-size: 1.3rem;
      margin-left: 5px;
    }
  }
`;

export const ModalRequestButtons = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
`;

export const ModalRequestConfirmation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h3 {
    color: ${props => props.theme.colors.textColorBlue};
  }

  span {
    text-align: center;
    padding: 0 10px;
    margin-bottom: 5px;
  }

  img {
    width: 130px;
  } 

  a {
    width: 90px;
    height: 30px;
    background-color: ${props => props.theme.colors.buttonColor};
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
`;