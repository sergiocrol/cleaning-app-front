import styled from 'styled-components';

const width = ({ width }) => {
  return width || 300;
}

const height = ({ height }) => {
  return height || 50;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 75%;
  max-width: ${width}px;
  height: ${height}px;
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.buttonColor};
  color: white;
  border-radius: 50px;
  border: none;

  &:hover {
    background-color: #6488ea;
  }
`;
