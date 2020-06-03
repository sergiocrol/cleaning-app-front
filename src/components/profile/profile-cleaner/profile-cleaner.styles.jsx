import styled from 'styled-components';

export const NewAddressCard = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.buttonColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  span {
    color: white;
  }

  span:nth-child(1) {
    font-size: 1.8rem;
    margin-right: 10px;
  }

  span:nth-child(2) {
    font-size: 1.3rem;
  }
`;