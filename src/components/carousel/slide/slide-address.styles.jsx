import styled, { css } from 'styled-components';

const spanStyle = css`
  height: 50%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

export const SlideAddressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  color: ${props => props.theme.colors.textColorBlue};
`;

export const MapImage = styled.img`
  position: absolute;
  width: 300px;
  right: -75px;
  bottom: -26px;
`;

export const MaskImage = styled.img`
  position: absolute;
  right: -66px;
  bottom: 0;
  width: 300px;
`;

export const SlideAddressHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  position: relative;
  border-bottom: 1px solid #d3d3d37d;
  z-index: 1;

  span:nth-child(1) {
    ${spanStyle};
    font-size: 1.3rem;
    font-weight: bold;
  }

  span:nth-child(2) {
    ${spanStyle};
    font-size: 1rem;
  }
`;

export const SlideAddressBody = styled.div`
  width: 100%;
  height: 210px;

  > div {
    position: relative;
    z-index: 2;
    width: 35%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    justify-content: space-between;
    padding: 15px 0 15px 14px;

    div {
      display: flex;
      align-items: center;
      font-size: 1.4rem;

      span {
        font-size: 1rem;
        display: flex;
        align-items: center;

        svg {
          margin-right: 2px;
        }
      }

      svg {
        width: 30px;
        height: 30px;
        margin-right: 4px;
      }
    }
  }
`;


