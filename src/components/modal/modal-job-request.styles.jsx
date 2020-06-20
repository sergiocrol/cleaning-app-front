import styled from 'styled-components';

import UserImage from '../../assets/signup-page/user-avatar.svg';

export const JobCardMap = styled.div`
  background-image: url('${({ mapImage }) => mapImage}');
  background-size: cover;
  background-position: center;
  height: 200px;
  margin-top: 10px;
  border-radius: 0 0 10px 10px;
  opacity: .7;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 15px 10px 15px;

  svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.buttonColor};
  }

  span {
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const ProfileUserImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.buttonColor};
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-image: url(${({ picture }) => picture ? picture : UserImage});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat; 
  overflow: hidden;
`;
