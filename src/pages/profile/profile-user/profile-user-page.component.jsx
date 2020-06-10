/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';

import UserHistory from '../../../components/history/user-history/user-history.component';
import UserProfile from '../../../components/profile/profile-user/profile-user.component';

import { AuthContext } from '../../../contexts/auth-context';
import { UserContext } from '../../../contexts/user-context';

import BackgroundImage from '../../../assets/backgrounds/bg2-alpha.svg';

import {
  ProfileUserContainer,
  ProfileUserBody,
  ImageBackground
} from './profile-user-page.styles';

const ProfileUser = () => {
  const [isHistory, setHistory] = useState(true);
  const [jobs, setJobs] = useState([]);

  const { getAllJobs, deleteAddress, editUser } = useContext(UserContext);
  const { user: { firstName, lastName, email, addresses, _id, picture }, logout, update } = useContext(AuthContext);

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
      <ProfileUserBody>
        {
          isHistory
            ? <UserHistory
              jobs={jobs}
              name={`${firstName} ${lastName}`}
              email={email}
              setHistory={setHistory}
              picture={picture}
            />
            : <UserProfile
              setHistory={setHistory}
              name={`${firstName} ${lastName}`}
              picture={picture}
              update={update}
              email={email}
              addresses={addresses}
              logout={logout}
              delete={deleteAddress}
              edit={editUser}
              id={_id}
            />
        }
      </ProfileUserBody>
    </ProfileUserContainer >
  );
}

export default ProfileUser;