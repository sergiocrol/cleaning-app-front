import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/logo/logo-bold.svg';

export const SpinnerContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  background-color: #F2F0F3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpinnerLogo = styled(Logo)`
  width: 60px;
  height: 80px;
  margin-bottom: 10px;
  fill: transparent;
  stroke: #384389;
  stroke-width: 0.1;

  .path {
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: dash 1.5s ease-in-out alternate forwards, color 1s .8s ease-in-out forwards;
  }
  
  @keyframes dash {
    from {
      stroke-dashoffset: 40;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes color {
    from {
      fill: transparent;
    }
    to {
      fill: #384389;
    }
  }
`;

export const SpinnerText = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #384389a1;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;