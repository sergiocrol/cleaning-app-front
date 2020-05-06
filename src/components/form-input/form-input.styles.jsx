import styled from 'styled-components';

const getWidth = ({ width }) => {
  return width
    ? `width:${width}; display: inline-block;`
    : 'width: 90%; max-width: 400px;'
}

export const FormInputContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: 55px;
  position: relative;
  ${getWidth}
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  margin-left: 10px;
  position: absolute;
  bottom: -6px;
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
  border-radius: 50px;
  height: 35px;
  margin: 10px 0 0 0;
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: grey;
    opacity: .5;
  }
`;