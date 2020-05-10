import React, { useContext } from 'react';

import { LoadingContext } from '../../contexts/loading-context';

import { SpinnerContainer, SpinnerLogo, SpinnerText } from './spinner.styles';

const Spinner = () => {
  const { loadingCount } = useContext(LoadingContext);
  return (
    <>
      {loadingCount > 0 && (
        <SpinnerContainer>
          <SpinnerLogo />
          <SpinnerText><div></div><div></div><div></div><div></div></SpinnerText>
        </SpinnerContainer>
      )}
    </>
  );
}

export default Spinner;