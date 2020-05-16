import styled from 'styled-components';

export const MapPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
`;

export const MapPageForm = styled.form`
  position: absolute;
  z-index: 999;
  display: flex;
  top: 15px;
  left: 15px;

  input:first-child {
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

  input:nth-child(2) {
    height: 40px;
    border-radius: 0 5px 5px 0;
    border: none;
    width: 45px;
    background-color: ${props => props.theme.colors.buttonColor};
    color: white;
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  display: ${({ showbutton }) => showbutton ? 'flex' : 'none'};
  position: absolute;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  bottom: 30px;
  border: none;
  background-color: ${props => props.theme.colors.buttonColor};
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  left: 50%;
  transform: translateX(-50%)
`;