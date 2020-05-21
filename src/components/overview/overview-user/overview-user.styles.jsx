import styled from 'styled-components';

export const OverviewUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const isHidden = ({ ishidden }) => {
  return ishidden ? 'none' : 'flex';
}

export const OverviewUserRequests = styled.div`
  width: 100%;
  display: ${isHidden};
  flex-direction: column;
  align-items: center;
`;