import styled from 'styled-components';

const colors = ({ status }) => {
  let color;
  switch (status) {
    case 'pending':
      color = '#a8a5a5';
      break;
    case 'hire':
      color = '#466DF1';
      break;
    case 'confirmed':
      color = '#3EA09B';
      break;
    default:
      color = '#F2788B';
  }
  return color;
}

export const ButtonStatus = styled.span`
  background-color: ${colors};
  color: white;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
