import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: calc(100vh - 60px);
  background-color: #4a5295;
  opacity: .9;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: calc(50% - 245px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1050;
  width: 90vw;
  max-width: 400px;
  height: 430px;
  background-color: white;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  position: fixed;
  top: calc(50% - 255px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1070;
  width: 95vw;
  height: 30px;
  max-width: 420px;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #F2F0F2;
  font-weight: bolder;
  color: ${props => props.theme.colors.buttonColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;