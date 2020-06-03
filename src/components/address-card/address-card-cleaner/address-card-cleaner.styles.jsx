import styled from 'styled-components';

export const AddressCardContainer = styled.div`
  height: 124px;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  color: ${props => props.theme.colors.textColorBlue};
`;

export const AddressCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d3d3d382;
  padding: 5px 10px;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  span:nth-child(1) {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

export const AddressCardBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;

  div, a {
    width: 100px;
    height: 30px;
    font-size: 1.1rem;
    color: gray;
    justify-content: center;
    align-items: center;
    display: flex;

    img {
      width: 30px;
    }
  }
`;

export const AddressDeleteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    span {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      color: white;
    }

    span:nth-child(1) {
      background-color: ${props => props.theme.colors.confirmButtonColor};
    }

    span:nth-child(2) {
      background-color: ${props => props.theme.colors.cancelButtonColor};
    }
  }
`;