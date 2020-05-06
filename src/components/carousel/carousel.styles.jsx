import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

const calculatePosition = ({ height }) => {
  return height / 2;
}

export const CarouselContainer = styled.div`
  width: 90%;
  height: 400px;
  position: relative;
  border-radius: 10px;
  background-color: white;
`;

export const NewJobButton = styled(CustomButton)`
  position: absolute;
  bottom: -${calculatePosition}px;
  left: 50%;
  transform: translateX(-50%);
`