import styled from 'styled-components';

export const CardLoadingContainer = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 15px 20px;
  margin: 10px 0;
  align-items: center;
  position: relative;
  
  :after {
    content: "";
    position: absolute;
    top: -6%;
    left: -30%;
    width: 27%;
    height: 91%;
    opacity: 0;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient( to right,rgba(255,255,255,0) 0%,rgba(255,255,255,0.13) 77%,rgba(255,255,255,0.7) 92%,rgba(255,255,255,0.0) 100%);
    animation: shine 1s 1s ease-in-out infinite;
  }
  
  @keyframes shine {
    to {
      opacity: 1;
      left: 70%;
    }
  }
`;

export const CardLoadingImage = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: lightgray;
`;

export const CardLoadingBody = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 65px);
  height: 65px;
  padding-left: 20px;
  justify-content: space-evenly;

  div:nth-child(1) {
    width: 80%;
    height: 16px;
    background-color: lightgray;
  }
  div:nth-child(2) {
    width: 70%;
    height: 7px;
    background-color: lightgray;
  }
  div:nth-child(3) {
    width: 70%;
    height: 7px;
    background-color: lightgray;
  }
`;