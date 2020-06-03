import styled from 'styled-components';

export const AddressInputContainer = styled.div`
  height: 55px;
  position: relative;
  width: 90%;
  max-width: 400px;
  
  p {
    color: red;
    font-size: 13px;
    margin-left: 10px;
    position: absolute;
    bottom: -14px;
  }
`;

export const AddressInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 0;
  display: block;
  width: 100%;
  border: none;
  border-radius: 50px;
  height: 35px;
  padding-left: 10px;
  margin: 10px 10px 0 0;

  ::placeholder {
    color: grey;
    opacity: .5;
  }
`;

export const NewAddressMap = styled.div`
  width: 80%;
  max-width: 310px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  transform: translate3d(0px, 0px, 0px);  
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-transform: translate3d(0px, 0px, 0px);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  margin: 10px 0 20px 0;
  position: relative;
  border: 1px solid lightgray;
`;