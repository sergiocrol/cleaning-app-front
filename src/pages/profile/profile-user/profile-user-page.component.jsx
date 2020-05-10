/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';

import CustomButton from '../../../components/custom-button/custom-button.component';
import BackgroundImage from '../../../assets/backgrounds/bg2-alpha.svg';
import UserHistory from '../../../components/history/user-history/user-history.component';
import UserProfile from '../../../components/profile/profile-user/profile-user.component';

import { AuthContext } from '../../../contexts/auth-context';
import { UserContext } from '../../../contexts/user-context';

import {
  ProfileUserContainer,
  ProfileUserHeader,
  ProfileUserImage,
  ProfileUserInfo,
  ProfileUserButtonContainer,
  ProfileUserBody,
  ImageBackground
} from './profile-user-page.styles';

const ProfileUser = () => {
  const [inverted, setInverted] = useState(true);
  const [isHistory, setHistory] = useState(true);
  const [jobs, setJobs] = useState([]);

  const { getAllJobs } = useContext(UserContext);
  const { user: { name, email } } = useContext(AuthContext);

  useEffect(() => {
    getAllJobs()
      .then(jobList => {
        setJobs(jobList);
      })
      .catch(error => {
        console.log(error);
        setJobs([]);
      })
  }, []);

  return (
    <ProfileUserContainer>
      <ImageBackground src={BackgroundImage} />
      <ProfileUserHeader>
        <ProfileUserImage />
        <ProfileUserInfo>
          <span>{name || email}</span>
          <ProfileUserButtonContainer>
            <CustomButton width='92' height='25' fontsize='.7' fontweight='lighter' inverted={!inverted} onClick={() => { setInverted(!inverted); setHistory(!isHistory) }}>
              show history
            </CustomButton>
            <CustomButton width='92' height='25' fontsize='.7' fontweight='lighter' inverted={inverted} onClick={() => { setInverted(!inverted); setHistory(!isHistory) }}>
              edit profile
            </CustomButton>
          </ProfileUserButtonContainer>
        </ProfileUserInfo>
      </ProfileUserHeader>
      <ProfileUserBody>
        {
          isHistory
            ? <UserHistory jobs={jobs} />
            : <UserProfile />
        }
      </ProfileUserBody>
    </ProfileUserContainer >
  );
}

export default ProfileUser;