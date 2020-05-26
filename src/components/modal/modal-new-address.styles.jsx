import styled from 'styled-components';

export const ModalAddress = styled.div`
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