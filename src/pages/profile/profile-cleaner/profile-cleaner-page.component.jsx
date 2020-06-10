import React, { useState } from 'react';

import CleanerHistory from '../../../components/history/cleaner-history/cleaner-history.component';
import CleanerProfile from '../../../components/profile/profile-cleaner/profile-cleaner.component';

import BackgroundImage from '../../../assets/backgrounds/bg2-alpha.svg';

import {
  ProfileUserContainer,
  ProfileUserBody,
  ImageBackground
} from '../profile-user/profile-user-page.styles';

const ProfileCleaner = () => {
  const [isHistory, setHistory] = useState(true);

  return (
    <ProfileUserContainer>
      <ImageBackground src={BackgroundImage} />
      <ProfileUserBody>
        {
          isHistory
            ? <CleanerHistory setHistory={setHistory} />
            : <CleanerProfile setHistory={setHistory} />
        }
      </ProfileUserBody>
    </ProfileUserContainer >
  );
}

export default ProfileCleaner;