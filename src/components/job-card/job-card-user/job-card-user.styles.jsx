import styled from 'styled-components';

import CleanerAvatar from '../../../assets/signup-page/cleaner-avatar.svg';

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
  justify-content: space-around;
`;

export const JobCardPriceDuration = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 90%;

  > span:nth-child(1) {
    font-size: .9rem;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: ${({ minutes }) => minutes > 0 ? '2rem' : '2.8rem'};

    span {
      font-size: ${({ minutes }) => minutes > 0 ? '.8rem' : '1.2rem'};
      font-weight: lighter;
      margin: 0 3px;
    }
  }
`;

export const JobDurationTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: ${({ minutes }) => minutes > 0 ? '2rem' : '2.8rem'};

  span {
    font-size: .8rem; 
    font-weight: lighter;
    margin: 0 3px;
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
    flex-wrap: wrap;
    justify-content: center;

    span {
      font-size: .8rem;
      margin-left: 5px;
    }
  }
  span:nth-child(2) {
    font-size: .9rem;
  }
`;

export const CleanerImage = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.buttonColor};
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-image: url(${({ picture }) => picture ? picture : CleanerAvatar});
  background-size: cover;
  background-position:50% 50%;
  background-repeat:no-repeat; 
  position: relative;
  margin-right: ${({ requests }) => requests && requests > 1 ? '10px' : '0px'};

  div {
    position: absolute;
    right: -12px;
    width: 25px;
    height: 25px;
    background-color: #37418A;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    font-size: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;