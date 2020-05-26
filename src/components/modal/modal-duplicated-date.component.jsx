import React from 'react';

import { ModalDuplicatedContainer } from './modal-duplicated-date.styles';

import Wrong from '../../assets/modals/wrong.png';

const ModalDuplicatedDate = () => {
  return (
    <ModalDuplicatedContainer>
      <img src={Wrong} alt='Error' />
      <h3>Ooooops!</h3>
      <span>It seems you already have a job for this date :(</span>
      <span>Please, select another date, or cancel your current job</span>
    </ModalDuplicatedContainer>
  );
}

export default ModalDuplicatedDate;