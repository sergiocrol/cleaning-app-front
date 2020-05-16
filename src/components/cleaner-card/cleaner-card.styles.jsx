import styled from 'styled-components';

import { ReactComponent as CleanerImage } from '../../assets/signup-page/cleaner.svg';

export const CleanerCardContainer = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 15px 20px;
  margin: 10px 0;
  align-items: center;
`;

export const Cleaner = styled(CleanerImage)`
  width: 65px;
  height: 65px;
`;

export const StarsOuter = styled.div`
  display: inline-block;
  position: relative;
  &:before {
    content: "\\2605 \\2605 \\2605 \\2605 \\2605";
    color: #D9D9D9;
    font-size: 1.2rem;
    border-color: #D9D9D9;
  }
`;

const calculateRate = ({ rate }) => {
  return rate * 20;
}

export const StarsInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${calculateRate}%;

  &:before {
    content: "\\2605 \\2605 \\2605 \\2605 \\2605";
    color: #EEB734;
    font-size: 1.2rem;
    border-color: #EEB734;
  }
`;

export const Rate = styled.div``;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 40%;
  justify-content: center;
`;

export const Name = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 2.3rem;
  font-weight: 900;
  color: ${props => props.theme.colors.buttonColor};
  width: 30%;
  text-align: right;

  span{
  font-size: ${({ jobduration, addressduration }) => jobduration || addressduration ? '1.4rem' : '1.2rem'};
    font-weight: 500;   
  }
`;