import React, { useState } from 'react';

import { USER, CLEANER } from '../../constants/index';

import CustomButton from '../../components/custom-button/custom-button.component';

import {
  UserSelector,
  UserTypeContainer,
  UserTypeTitle,
  UserTypeSubtitle,
  SelectionUser,
  UserImg,
  CleanerImg,
  UserDescription
} from './signup.styles';

const UserType = ({ setCleaner }) => {
  const [isCleaner, setIsCleaner] = useState(false);

  const handleChange = (type) => {
    type === USER ? setIsCleaner(false) : setIsCleaner(true);
  }

  return (
    <UserTypeContainer>
      <UserTypeTitle>Welcome to maemae</UserTypeTitle>
      <UserTypeSubtitle>You can be part of our community in two ways:</UserTypeSubtitle>
      <UserSelector>
        <SelectionUser isCleaner={!isCleaner} onClick={() => handleChange(USER)}>
          <UserImg />
          <UserTypeTitle>User</UserTypeTitle>
          <UserDescription>You can offer job, and hire professionals</UserDescription>
        </SelectionUser>
        <SelectionUser isCleaner={isCleaner} onClick={() => handleChange(CLEANER)}>
          <CleanerImg />
          <UserTypeTitle>Cleaner</UserTypeTitle>
          <UserDescription>You can find jobs adapted to your needs</UserDescription>
        </SelectionUser>
      </UserSelector>
      <CustomButton onClick={() => setCleaner(isCleaner)}>next</CustomButton>
    </UserTypeContainer>
  );
}

export default UserType;