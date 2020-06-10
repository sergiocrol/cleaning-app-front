import styled from 'styled-components';

export const JobCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding-bottom: 15px;
  margin: 10px 0;
`;

export const CustomSliderContainer = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    color: ${props => props.theme.colors.textColorBlue};
    display: flex;
    align-items: center;

    span {
      font-size: 1.6rem;
      font-weight: lighter;
      margin-right: 8px;
      color: gray;
    }
  }

  > div {
    margin-bottom: 0;
  }
`;