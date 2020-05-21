import styled from 'styled-components';

export const AddressCardContainer = styled.div`
  height: 160px;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  color: ${props => props.theme.colors.textColorBlue};
  position: relative;
`;

export const AddressCardHeader = styled.div`
  border-bottom: 1px solid #d3d3d382;
`;

export const AddressCardBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;

  div{
    display: flex;
    align-items: center;
    font-size: 1.1rem;

    svg {
      width: 25px;
      height: 25px;
      margin-right: 3px;
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`;

export const AddressCardHeaderName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;

  span:nth-child(1) {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bolder;

    svg {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }

  span:nth-child(2) {
    img {
      width: 35px;
      height: 35px;
      margin-left: 3px;
    }
  }
`;

export const AddressCardHeaderAddress = styled.span`
  padding: 0 10px;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const DeleteMessage = styled.div`
  display: ${({ deleteMessage }) => deleteMessage ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  height: 160px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  top: 0;
  left: 0;
  color: ${props => props.theme.colors.textColorBlue};

  > div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  span {
    width: 120px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  span:nth-child(1) {
    background-color: ${props => props.theme.colors.confirmButtonColor};
  }

  span:nth-child(2) {
    background-color: ${props => props.theme.colors.cancelButtonColor};
  }
`;