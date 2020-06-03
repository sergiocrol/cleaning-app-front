import styled from 'styled-components';

import { ReactComponent as UserImage } from '../../../assets/signup-page/user-avatar.svg';

export const ProfileUserJobs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const buttonColor = props => props.theme.colors.buttonColor;

export const ProfileUserImage = styled(UserImage)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${buttonColor};
`;

export const ProfileUserInfo = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-left: 15px;
  span{
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const ProfileUserButtonContainer = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 20px;
    margin-right: 3px;
  }

  span {
    color: darkgray;
    font-size: 1rem;
    font-weight: lighter;
  }
`;

export const ProfileUserHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;

export const JobEmpty = styled.div`
  width: 100%;
  background-color: white;
  opacity: .7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.textColorBlue};
  }

  a {
    width: 100px;
    height: 30px;
    background-color: ${props => props.theme.colors.buttonColor};
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  span {
    width: 90%;
    text-align: center;
  }

  img {
    width: 100px;
    margin-bottom: 20px;
  }
`; 