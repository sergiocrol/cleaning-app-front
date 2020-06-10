import styled, { css } from 'styled-components';

const titleStyle = css`
  div {
    width: 80%;

    h3, p {
      text-align: center;
    }

    h3 {
      margin-bottom: 0;
      font-size: 1.3rem;
    }

    p {
      letter-spacing: 1px;
    }
  }
`;

export const WelcomeSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 80px;

  ${titleStyle};

  svg {
    width: 28%;
    height: 90px;
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const UserTypeSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 80px 0; 

  ${titleStyle};

  svg:nth-child(1) {
    width: 40px;
    height: 40px;
    fill: #384389;
  }

  svg:nth-child(2) {
    height: 40%;
  }
`;