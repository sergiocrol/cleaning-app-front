import styled from 'styled-components';

export const JobDetailsPageContainer = styled.div`
  padding: 15px;
`;

export const JobDetailsPageHeader = styled.div`
  background-color: white;
  padding-bottom: 15px;
  border-radius: 10px;
`;

export const ImageBackground = styled.img`
  min-height: calc(100vh - 60px);
  z-index: -99;
  width: 105%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`;

export const JobDetailsPageTitle = styled.h3`
  display: flex;
  align-items: flex-start; 
  width: 100%;

  span {
    font-size: .9rem;
    margin-right: 3px;
    font-weight: lighter;
  }
`;

export const JobDetailsPageBody = styled.div`
  h3 {
    margin-left: 5px;
  }
`;