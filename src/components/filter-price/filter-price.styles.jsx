import styled from 'styled-components';

export const FilterPriceContainer = styled.div`
  width: 100%;
  height: 60px;

  background-color: white;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const SwitchButtonContainer = styled.div`
  font-size: .8rem;
  color: ${props => props.theme.colors.textColorBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49px;
  margin-top: 3px;

  div {
    margin: 0 3px;
  }

  span {
    padding-top: 3px;
  }
`;

export const CustomSliderContainer = styled.div`
  /* width: ${({ isTotalPrice }) => isTotalPrice ? '80%' : '100%'}; */
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    margin: 0;
    input {
      margin-bottom: 9px;
      background-color: lightgray;
      width: 95%;
    }
    span {
      font-size: .8rem;
      color: ${props => props.theme.colors.textColorBlue};
      font-weight: lighter;
    }
  }
`;