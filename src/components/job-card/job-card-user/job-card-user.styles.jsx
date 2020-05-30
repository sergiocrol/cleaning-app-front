import styled from 'styled-components';

const textColor = props => props.theme.colors.textColorBlue;
const backgrounColor = { pending: '#5B9AFF', confirmed: props => props.theme.colors.buttonColor, finished: '#BAB8CA' };

export const JobCardContainer = styled.div`
  width: 100%;
  height: 155px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  margin: 10px 0;
`;

export const JobCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 120px);
`;

export const JobCardInfoAddress = styled.span`
  font-size: 1.2rem;
  font-weight: bolder;
  color: ${textColor};
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const JobCardInfoDate = styled.div`
  color: ${textColor};
  font-size: 1.1rem;
  span {
    margin-right: 10px;
  };
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const JobCardInfoRooms = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40px;
  border-top: 1px solid #d3d3d35e;
  padding-top: 17px;
`;

export const JobCardPriceContainer = styled.div`
  width: 120px;
  background-color: ${({ status }) => backgrounColor[status]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border-radius: 0 10px 10px 0;
`;

export const JobCardPriceDuration = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 90%;

  span:nth-child(1) {
    font-size: .9rem;
  }
  span:nth-child(2) {
    font-size: 3.3rem;
    font-weight: bold;
    span {
      font-size: 1.6rem;
      font-weight: lighter;
      margin-left: 5px;
    }
  }
`;

export const JobCardCleaners = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 90%;
  margin-top: 5px;

  span:nth-child(1) {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    span {
      font-size: 1rem;
      margin-left: 5px;
    }
  }
  span:nth-child(2) {
    font-size: .9rem;
  }
`;