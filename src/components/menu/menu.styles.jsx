import styled, { css } from 'styled-components';

import { ReactComponent as Profile } from '../../assets/menu/profile-unselect.svg';
import { ReactComponent as Home } from '../../assets/menu/home-unselect.svg';
import { ReactComponent as New } from '../../assets/menu/new-unselect.svg';

const iconSize = ({ iscurrent }) => css`
  width: 30px;
  height: 30px;
  
  path{
    stroke: ${iscurrent === "true" ? '#4672ed' : '#686A9C'};
    stroke-width: 25px;
  }
  line{
    stroke: ${iscurrent === "true" ? '#4672ed' : '#686A9C'};
    stroke-width: 25px;
  }
`;

export const MenuContainer = styled.div`
  background-color: white;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 30px;
  border-top: 1px #d3d3d396 solid;
}
`;

export const ProfileIcon = styled(Profile)`
  ${iconSize}
`;

export const HomeIcon = styled(Home)`
  ${iconSize}
`;

export const NewIcon = styled(New)`
  ${iconSize}
`;