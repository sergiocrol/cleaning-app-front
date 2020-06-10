import styled from 'styled-components';

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
  position: relative;
`;

export const UserProfileImage = styled.div`
  width: 110px;
  height: 110px;
  display: block;
  background-color: ${(props) => props.theme.colors.buttonColor};
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-image: url(${({ picture }) => picture});
  background-size: cover;
  background-position:50% 50%;
  background-repeat:no-repeat; 
  position: relative;
  overflow: hidden;
`;

export const SaveAvatarButton = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  opacity: .8;
  width: 100%;
  padding: 5px 0;
  display: ${({ avatarImage }) => avatarImage ? 'flex' : 'none'};
  justify-content: center;
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
    margin-left: 5px;
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
  z-index: 999;
`;

export const UserProfileEmail = styled.span`
  font-size: .8rem;
`;

export const UserProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddressEmpty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: .7;
  border-radius: 10px;
  height: 210px;
  padding: 20px;

  svg {
    width: 130px;
  }

  h3 {
    color: ${props => props.theme.colors.textColorBlue};
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  span {
    width: 90%;
    text-align: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.buttonColor};
    width: 80px;
    height: 30px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
`;