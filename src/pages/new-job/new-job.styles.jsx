import styled, { css } from 'styled-components';

import background from '../../assets/backgrounds/bg4-alpha.svg';
import { ReactComponent as AddIcon } from '../../assets/new-job/add-icon.svg';

const line = css`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
`;

export const NewJobContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const NewJobTitle = styled.h2`
  width: 90%;
  text-align: center;
  font-size: 1.3rem;
`;

export const MessageBlock = styled.div`
  width: 90%;
  background-color: #ffffffc4;
  border-radius: 10px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    width: 80%;
    text-align: center;
    font-weight: lighter;
    letter-spacing: 1px;
    font-size: .9rem;
    height: 50%;
    padding: 10px;

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
  fill: transparent;
  animation: ${isVisible} .6s ease-in-out 1 forwards;

  @keyframes show {
    0% {
      fill: ${props => props.theme.colors.buttonColor};
    }
    100% {
      fill: white;
    }
  }

  @keyframes disappear {
    0% {
      fill: white;
    }
    100% {
      fill: ${props => props.theme.colors.buttonColor};
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
  width: 90%;
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
  width: 90%;
  font-size: larger;
  color: gray;
  text-align: center;
  margin: 30px 0 5px 0;
`;

export const RoomsLine = styled.div`
  ${line}
  justify-content: space-around;
  margin-top: 20px;
`;