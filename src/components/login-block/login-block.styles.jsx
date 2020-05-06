import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BarContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #3674AB;
  margin-left: 3px;
`;