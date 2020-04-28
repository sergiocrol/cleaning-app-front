import React, { useState } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { UserIcon, UserSelector, UserTypeContainer } from './signup.styles';

const UserType = ({ setCleaner }) => {
  const [isCleaner, setIsCleaner] = useState(false);

  const handleChange = () => {
    setIsCleaner(!isCleaner);
  }

  return (
    <UserTypeContainer>
      <h2>Select if you are a user or a cleaner</h2>
      <UserSelector>
        <UserIcon>
          <input type="radio" name="isCleaner" onChange={handleChange} checked={!isCleaner} />
          <span>USER</span>
        </UserIcon>

        <UserIcon>
          <input type="radio" name="isCleaner" onChange={handleChange} checked={isCleaner} />
          <span>CLEANER</span>
        </UserIcon>
      </UserSelector>
      <CustomButton onClick={() => setCleaner(isCleaner)}>NEXT</CustomButton>
    </UserTypeContainer>
  );
}

export default UserType;