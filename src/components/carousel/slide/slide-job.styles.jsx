import styled, { css } from 'styled-components';

const textColorBlue = props => props.theme.colors.textColorBlue;

const commonLineStyles = css`
  display: flex;
  align-items: center;

  span {
    color: ${textColorBlue};
    font-size: 1.2rem;
    font-weight: lighter;
    margin-right: 10px;
  }
`;

export const SlideContainer = styled.div`
  &:focus {
    outline: none;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SlideHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #d3d3d354;
  height: 100px;
`;

export const SlideTitle = styled.h3`
  margin: 20px;
  font-size: 1.1rem;
  text-align: left;
  margin: 0;
  display: flex;
  color: ${textColorBlue};
`;

export const AddressLine = styled.div`
  ${commonLineStyles}
`;

export const DateLine = styled.div`
  ${commonLineStyles}
`;

export const RequestsLine = styled.div`
  ${commonLineStyles}
  justify-content: center;
  font-size: 1.7rem;
  margin-top: 30px;
  color: ${textColorBlue};
  span {
    font-size: 1.2rem;
    margin: 5px 0 0 10px;
  }
  h3 {
    margin:0;
    font-weight: lighter;
  }
`;

export const RoomsLine = styled.div`
  display: flex;
  justify-content: space-evenly;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: ${textColorBlue};
      font-size: 1.3rem;
      margin-left: 5px;
    }
  }
`;

export const SlideBody = styled.div`
  margin-top: 20px;
`;

export const SlideAddressTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  padding: 20px;
`;

export const SlideTotalTime = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: .7rem;
  }

  h1 {
    margin: 0;
    font-size: 3rem;
    color: ${textColorBlue};

    span {
      font-size: 1.2rem;
      font-weight: lighter;
      margin-left: 5px;
    }
  }
`;