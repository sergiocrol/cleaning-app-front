import styled from 'styled-components';

import { ReactComponent as UserImage } from '../../../assets/signup-page/user-avatar.svg';

export const UserProfileTitle = styled.h3`
  display: flex;
  align-items: flex-start; 
  width: 100%;

  span {
    font-size: .9rem;
    margin-right: 3px;
    font-weight: lighter;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserProfileHeader = styled.div`
  text-align: center; 
  margin: 15px 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserProfileImage = styled(UserImage)`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${(props) => props.theme.colors.buttonColor};
`;

export const UserProfileName = styled.span`
  font-weight: bolder;
  display: flex;
  align-items: center;
  margin: 10px 0;
  position: relative;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const LogoutButton = styled.span`
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  position: absolute;
  right: -36px;
  top: 25px;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.buttonColor};
`;

export const UserProfileEmail = styled.span`
  font-size: .8rem;
`;

export const UserProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;