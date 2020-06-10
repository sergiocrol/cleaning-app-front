import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CarouselButton = styled(Link)`
  width: 150px;
  height: 40px;
  background-color: ${props => props.theme.colors.buttonColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;