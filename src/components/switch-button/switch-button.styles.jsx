import styled from 'styled-components';

export const SwitchButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 3px;
  height: 18px;

  input {
    display: none;
  }

  label {
    display: block;
    width: 40px;
    height: 18px;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    user-select: none;

    &::after, &::before {
      content: "";
      display: block;
      position: absolute;
      cursor: pointer;
    }

    &::before {
      width: 100%;
      height: 100%;
      background-color: #dedede;
      border-radius: 9999em;
      -webkit-transition: background-color 0.25s ease;
      transition: background-color 0.25s ease;
    }

    &::after {
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.buttonColor};
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
      -webkit-transition: left 0.25s ease;
      transition: left 0.25s ease;
    }
  }

  input:checked + label::after {
    left: 22px;
  }
`;