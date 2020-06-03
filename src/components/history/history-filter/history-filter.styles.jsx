import styled from 'styled-components';

export const HistoryFilterContainer = styled.div`
  height: 70px;
  background-color: white;
  display: flex;
  border-radius: 10px;
  margin: 10px 0;

  div:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  div:nth-child(4) {
    border-right: none;
    border-radius: 0 10px 10px 0;
  }
`;

const changeNumberColor = ({ isActived }) => {
  return isActived ? 'white' : '#4672ed';
}

const changeTextColor = ({ isActived }) => {
  return isActived ? 'white' : 'gray';
}

const changeBackgroundColor = ({ isActived }) => {
  return isActived ? '#4672ed' : 'white';
}

export const HistoryButton = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #d3d3d382;
    background-color: ${changeBackgroundColor};

    span:nth-child(1) {
      font-size: 2rem;
      font-weight: bold;
      color: ${changeNumberColor};
    }

    span:nth-child(2) {
      font-size: .9rem;
      font-weight: lighter; 
      color: ${changeTextColor};
    }
`;