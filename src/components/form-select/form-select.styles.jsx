import styled from 'styled-components';

const width = ({ width }) => {
  return width || 250;
}

export const SelectButtonContainer = styled.select`
  border: none;
  width: ${width}px;
  height: 30px;
  border-radius: 10px;
  background: white;
  outline: none;
  color: grey;
  padding-left: 10px;
  font-size: .9rem;

  &option {
    color: blue;
  }
`;