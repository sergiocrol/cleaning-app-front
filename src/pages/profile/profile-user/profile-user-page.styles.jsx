import styled from 'styled-components';

import { ReactComponent as UserImage } from '../../../assets/signup-page/user-avatar.svg';

const buttonColor = props => props.theme.colors.buttonColor;

export const ProfileUserContainer = styled.div`
  padding: 15px;
`;

export const ProfileUserHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;

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
  button {
    margin-right: 5px;
  }
`;

export const ProfileUserBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const showFilter = ({ showfilter }) => {
  return showfilter === 'true' ? 'flex' : 'none';
}

export const ProfileUserFilter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  > span {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  div {
    position: absolute;
    width: 165px;
    height: 130px;
    background-color: ${props => props.theme.colors.background};
    border: 2px solid #d3d3d3;
    display: ${showFilter};
    flex-direction: column;
    font-size: 1.1rem;
    border-radius: 5px;
    bottom: -135px;
    padding: 5px;

    label {
      display: table;
      position: relative;
      padding-left: 1.8rem;
      cursor: pointer;
      margin-bottom: .5rem;

      input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }

      span {
        line-height: 1.54;
        font-size: 1rem;
        font-family: inherit;
      }

      input ~ div {
        position: absolute;
        top: 2px;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background: rgb(227, 232, 236);
        transition: background 250ms;
        border: none;
        border-radius: 0.327rem;
      }

      input ~ div::after {
        content: '';
        position: absolute;
        display: none;
        left: .45rem;
        top: .18rem;
        width: .25rem;
        height: .6rem;
        border: solid rgba(255, 255, 255, 1);
        border-width: 0 2px 2px 0;
        transition: background 250ms;
        transform: rotate(45deg);
      }

      input:checked ~ div::after {
        display: block;
      }

      input:checked ~ div {
        background: rgba(0, 130, 243, 1);
        border-color: rgba(0, 130, 243, 1);
      }

      div::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 3rem;
        height: 3rem;
        margin-left: -0.85rem;
        margin-top: -0.85rem;
        background: rgba(0, 130, 243, 1);
        border-radius: 2rem;
        opacity: .6;
        z-index: 99999;
        transform: scale(0);
      }
    }
  }
`;

export const ProfileUserJobs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
