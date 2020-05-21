import styled from 'styled-components';

export const ProfileUserContainer = styled.div`
  padding: 15px;
`;

export const ProfileUserBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageBackground = styled.img`
  min-height: calc(100vh - 60px);
  z-index: -99;
  width: 105%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`;
