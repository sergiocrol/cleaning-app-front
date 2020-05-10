import styled from 'styled-components';

const width = ({ width }) => {
  return width || 300;
}

const height = ({ height }) => {
  return height || 50;
}

const fontsize = ({ fontsize }) => {
  return fontsize || 1;
}

const fontweight = ({ fontweight }) => {
  return fontweight || 'bolder';
}

const inverted = ({ inverted, theme }) => {
  const text = inverted
    ? `
  background-color: white;
  color: ${theme.colors.buttonColor};
  border: 1px solid ${theme.colors.buttonColor};
  `
    : `
  background-color: ${theme.colors.buttonColor};
  color: white;
  border: none;
  `
  return text;
}

export const CustomButtonContainer = styled.button`
  // min-width: 165px;
  width: 75%;
  max-width: ${width}px;
  height: ${height}px;
  letter-spacing: 1px;
  font-size: ${fontsize}rem;
  font-weight: ${fontweight};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;

  ${inverted}

  &:hover {
    background-color: #6488ea;
  }
`;
