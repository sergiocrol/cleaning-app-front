import styled from 'styled-components';

import { PENDING, CONFIRMED } from '../../../constants/index';

export const JobCardTotalPrice = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ status }) => status ? 'end' : 'center'};
  align-items: center;

  > span {
    font-size: .7rem;
  }

  h1 {
    margin: 0;
    font-size: 3rem;
    color: ${props => props.theme.colors.textColorBlue};

    span {
      font-size: 1.2rem;
      font-weight: lighter;
      margin-left: 5px;
    }
  }
`;

const getColor = ({ color }) => {
  return color === CONFIRMED
    ? props => props.theme.colors.confirmedJobColor
    : color === PENDING
      ? props => props.theme.colors.pendingJobColor
      : props => props.theme.colors.canceledJobColor
}

export const RequestStatus = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${getColor};
  border-radius: 0 0 5px 5px;
  align-self: flex-end;
  justify-content: flex-start;
  margin-right: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .7rem;

  span {
    border: 1px solid white;
    border-radius: 50%;
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .7;
  }
`

export const SlideTitle = styled.div`
  margin: 20px;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: left;
  margin: 0;
  display: flex;
  color: ${props => props.theme.colors.textColorBlue};

  > span {
    margin-left: 15px;

    span {
      font-size: .8rem;
    }
  }
`;