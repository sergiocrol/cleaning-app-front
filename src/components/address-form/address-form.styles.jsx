import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const AddressInputContainer = styled.div`
  height: 55px;
  position: relative;
  width: 90%;
  max-width: 400px;
  
  p {
    color: red;
    font-size: 13px;
    margin-left: 10px;
    position: absolute;
    bottom: -14px;
  }
`;

export const AddressInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 0;
  display: block;
  width: 100%;
  border: none;
  border-radius: 50px;
  height: 35px;
  padding-left: 10px;
  margin: ${({ isCleaner }) => isCleaner ? '10px 10px 0 0' : '0 10px 0 0'};

  ::placeholder {
    color: grey;
    opacity: .5;
  }
`;

export const NewAddressMap = styled.div`
  width: 80%;
  max-width: 310px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  transform: translate3d(0px, 0px, 0px);  
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-transform: translate3d(0px, 0px, 0px);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  margin-top: 10px;
  position: relative;
  border: 1px solid lightgray;
`;