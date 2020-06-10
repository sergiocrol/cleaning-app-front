import styled from 'styled-components';

import CleanerImage from '../../assets/signup-page/cleaner-avatar.svg';

export const CleanerCardContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 15px 20px;
  margin: ${({ button }) => button ? '30px 0' : '10px 0'};
  align-items: center;
  position: relative;
`;

export const Cleaner = styled.div`
  width: 65px;
  height: 65px;
  background-color: ${(props) => props.theme.colors.buttonColor};
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-image: url(${({ picture }) => picture ? picture : CleanerImage});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat; 
  overflow: hidden;
`;

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

export const ButtonStatus = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: -15px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;