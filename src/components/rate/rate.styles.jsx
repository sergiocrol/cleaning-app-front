import styled from 'styled-components';

const calculateRate = ({ rate }) => {
  return rate * 20;
}

export const StarsOuter = styled.div`
  display: inline-block;
  position: relative;
  width: 90px;
  &:before {
    content: "\\2605 \\2605 \\2605 \\2605 \\2605";
    color: #D9D9D9;
    font-size: 1.2rem;
    border-color: #D9D9D9;
  }
`;

export const StarsInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${calculateRate}%;

  &:before {
    content: "\\2605 \\2605 \\2605 \\2605 \\2605";
    color: #EEB734;
    font-size: 1.2rem;
    border-color: #EEB734;
  }
`;