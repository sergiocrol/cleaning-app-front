import styled, { css } from 'styled-components';

import { ReactComponent as UserAvatar } from '../../assets/signup-page/user-avatar.svg';
import { ReactComponent as CleanerAvatar } from '../../assets/signup-page/cleaner-avatar.svg';

const colors = {
  text: props => props.theme.colors.textColor,
  background: props => props.theme.colors.buttonColor
}

const selectionCard = css`
  width: 10rem;
  height: 15rem;
  margin: 0 5px;
  border-radius: 10px;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const avatar = css`
  width: 70%;
  background-color: ${colors.background};
  border-radius: 50%;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SignupForm = styled.form`
  width: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserTypeTitle = styled.h2`
  color: ${colors.text};
  letter-spacing: 1px;
  margin: 0;
  font-size: 1.2rem;
  margin: 5px;
  display: flex;
  align-items: center;

  a {
    font-size: .7rem;
    margin-right: 5px;
  }
`;

export const UserTypeSubtitle = styled.span`
  color: ${colors.text};
  width: 75%;
  text-align: center;
  font-size: 1rem;
`;

export const UserIcon = styled.label`
  margin-right: 30px;
`;

export const UserSelector = styled.div`
  margin: 30px 0;
  display: flex;
`;

const isCleaner = (prop) => {
  return prop.isCleaner
    ? `background-color: white;
    ${UserDescription} {
      display: block;
    }`
    : `background-color: transparent;
    ${UserDescription} {
      display: none;
    };
    ${CleanerImg}, ${UserImg}{
      filter: opacity(.7);
    }`;
}

export const SelectionUser = styled.div`
  ${selectionCard}
  ${isCleaner}
`;

export const UserImg = styled(UserAvatar)`
  ${avatar};
`;

export const CleanerImg = styled(CleanerAvatar)`
  ${avatar};
`;

export const UserDescription = styled.span`
  display: block;
  text-align: center;
  font-size: .8rem;
  margin: 0 8px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 75vh;
`;