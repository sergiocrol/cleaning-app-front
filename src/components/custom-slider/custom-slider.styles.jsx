import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 90%;
    margin-bottom: 15px;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #3F4477;
  border-radius: 3px;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: ${props => props.theme.colors.buttonColor};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: ${props => props.theme.colors.buttonColor};
    cursor: pointer;
  }
`;

export const SliderText = styled.span`
  margin: 0 0 0 5px;
  font-size: 1rem;
`;

export const SliderValue = styled.span`
  font-size: 1rem;
  font-weight: bolder;
  margin-right: 5px;
  color: ${props => props.theme.colors.buttonColor};
`;

export const SliderTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;