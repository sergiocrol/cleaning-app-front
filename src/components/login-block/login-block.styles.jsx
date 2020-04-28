import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BarContainer = styled.div`
  margin: 24px 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.hr`
  flex: auto;
  height: 0;
  box-sizing: content-box;
  overflow: visible;
  border: .5px solid lightgrey;
  width: 90%;
  max-width: 320px;
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #3674AB;
  margin-bottom: 24px;
`;