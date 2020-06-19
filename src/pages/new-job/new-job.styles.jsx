import styled, { css } from 'styled-components';

import background from '../../assets/backgrounds/bg4-alpha.svg';
import { ReactComponent as AddIcon } from '../../assets/new-job/add-icon.svg';
import { ReactComponent as UserImage } from '../../assets/signup-page/cleaner-avatar.svg';

const line = css`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  max-width: 295px;
`;

export const NewJobContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  height: calc(100vh - 60px);
  width: 100vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MessageBlock = styled.div`
  width: 90%;
  background-color: #ffffffc4;
  border-radius: 10px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    width: 90%;
    text-align: center;
    font-weight: lighter;
    letter-spacing: 1px;
    font-size: .9rem;
    height: 50%;
    padding: 0 10px;
    margin: 10px 0 0 5px;

    span{
      color: ${props => props.theme.colors.buttonColor};
      font-weight: 600;
    }
  }
`;

export const PrivatePublicIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${props => props.theme.colors.buttonColor};
`;

const isVisible = ({ isvisible }) => {
  return isvisible === null ? null : isvisible ? 'disappear' : 'show';
}

export const Path = styled.path`
  fill: white;
  animation: ${isVisible} .6s ease-in-out 1 forwards;

  @keyframes show {
    0% {
      // fill: ${props => props.theme.colors.buttonColor};
      fill: white;
    }
    100% {
      // fill: white;
      fill: ${props => props.theme.colors.buttonColor};
    }
  }

  @keyframes disappear {
    0% {
      fill: ${props => props.theme.colors.buttonColor};
    }
    100% {
      fill: white;
    }
  }
`;

export const PublicButtonContainer = styled.span`
  width: 160px;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.buttonColor};
  background-color: ${props => props.theme.colors.buttonColor};
  border-radius: 5px;
  padding: 5px 5px 5px 10px;
  `;

export const PublicMessage = styled.span`
  width: 70%;
  padding-left: 5px;
  font-size: .8rem;
  color: white;
  `;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;

export const Option = styled.option`
  color: ${props => props.theme.colors.textColor};
`;

export const AddressLine = styled.div`
  ${line}
`;

export const AddAddressIcon = styled(AddIcon)`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  fill: ${props => props.theme.colors.buttonColor};
`;

export const NewJobSubtitle = styled.h2`
  width: 100%;
  font-size: larger;
  color: gray;
  text-align: center;
  margin: 30px 0 5px 0;
`;

export const RoomsLine = styled.div`
  ${line}
  justify-content: space-around;
  margin-top: 20px;

  span {
    text-align: center;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const PhoneLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const JobPriceBlock = styled.div`
  width: 90%;
  height: 70px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  svg {
    margin-right: 10px;
  }

  span {
    font-size: 1.1rem;
    color: 'black';
    .mama {
      color: ${props => props.theme.colors.buttonColor};
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;

export const ImageBackground = styled.img`
  min-height: calc(100vh - 60px);
  z-index: -99;
  width: 105%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ProfileCleanerImage = styled(UserImage)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.buttonColor};
`;