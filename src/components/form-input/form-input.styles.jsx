import styled, { css } from 'styled-components';

const shrink = css`
  top: 10px;
  left: 0;
  font-size: 12px;
  color: black;
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 30px 0;
  width: 90%;
  max-width: 400px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  margin-left: 5px;
`;

const getValue = ({ content }) => {
  return content.length ? shrink : '';
}

export const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 30px;
  transition: 300ms ease all;

  &:focus {
    outline: none;
  }

  ${getValue}
`;

export const FormInputItem = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 0;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0 5px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrink}
  }
`;