import React from 'react';

import { CardLoadingContainer, CardLoadingImage, CardLoadingBody } from './card-loading.styles';

const CardLoading = () => {
  return (
    <CardLoadingContainer>
      <CardLoadingImage />
      <CardLoadingBody>
        <div></div>
        <div></div>
        <div></div>
      </CardLoadingBody>
    </CardLoadingContainer>
  );
}

export default CardLoading;