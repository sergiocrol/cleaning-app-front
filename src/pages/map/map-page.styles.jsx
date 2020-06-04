import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MapPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  top: 15px;
  left: 15px;

  input {
    width: 80vw;
    height: 40px;
    border-radius: 5px 0 0 5px;
    border: none;
    padding-left: 10px;
    background-color: white;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid lightgray;
  }

  span {
    height: 40px;
    border-radius: 0 5px 5px 0;
    border: none;
    width: 45px;
    background-color: ${props => props.theme.colors.buttonColor};
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled(Link)`
  display: ${({ showbutton }) => showbutton === 'true' ? 'flex' : 'none'};
  position: absolute;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  bottom: 30px;
  border: none;
  background-color: ${props => props.theme.colors.buttonColor};
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  left: 50%;
  transform: translateX(-50%)
`;