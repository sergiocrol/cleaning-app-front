import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay, ModalContainer, CloseButton, ModalHeader } from './modal.styles';

const Modal = ({ children, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <ModalOverlay />
    <ModalHeader>
      <CloseButton onClick={hide}>&#10005;</CloseButton>
    </ModalHeader>
    <ModalContainer>
      {
        children
      }
    </ModalContainer>
  </>, document.body
) : null;

export default Modal;