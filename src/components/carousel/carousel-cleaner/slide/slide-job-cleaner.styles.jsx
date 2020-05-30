import styled from 'styled-components';

export const SlideJobCleanerContainer = styled.div`
  height: 100%;
`;

const calculatePosition = ({ height }) => {
  return height / 2;
}

export const SlideButton = styled.span`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: ${({ buttonColor }) => buttonColor};
  bottom: -${calculatePosition}px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: ${({ selectedJob }) => selectedJob ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;