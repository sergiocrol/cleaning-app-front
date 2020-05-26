import styled from 'styled-components';

const isHidden = ({ ishidden }) => {
  return ishidden ? 'none' : 'flex';
}

export const OverviewUserTitle = styled.h2`
  width: 100%;
  margin-top: 30px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  
  span {
    font-size: .8rem;
    color: lightgray;
    display: flex;
    align-items: flex-end;
  }
`;

export const OverviewUserRequests = styled.div`
  width: 100%;
  display: ${isHidden};
  flex-direction: column;
  align-items: center;
`;