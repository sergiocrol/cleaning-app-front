import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 90%;
    margin-bottom: 15px;
`;

const color = props => props.theme.colors.buttonColor;

const sliderShadow = ({ value, max, min }) => {
  const val = ((value - min) * 100) / (max - min);
  return `linear-gradient(to right, #4672ed 0%, #4672ed ${val}%, lightgray 0%, lightgray 100%);`;
}

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: ${sliderShadow};
  border-radius: 3px;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-bottom: 9px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: ${color};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${color};
    cursor: pointer;
  }
`;

export const SliderText = styled.span`
  margin: 0 0 0 5px;
  font-size: .9rem;
  color: gray;
`;

export const SliderValue = styled.span`
  font-size: .9rem;
  margin-right: 5px;
  font-weight: bolder;
  color: ${props => props.theme.colors.buttonColor};
`;

export const SliderTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;