import styled, { css } from 'styled-components';

const commonLineStyles = css`
  display: flex;
  align-items: center;

  span {
    color: darkgrey;
    font-size: .9rem;
    font-weight: bolder;
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
  padding: 20px;
  display: flex;
  img{
    width: 40px;
    margin: 10px;
  }
`;

export const SlideTitle = styled.h3`
  margin: 20px;
  font-size: 1.3rem;
  text-align: center;
  text-decoration: underline;
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
  font-size: 1.4rem;
  img{
    width: 35px;
    margin-right: 10px;
  }
`;

export const RoomsLine = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 30px;
      margin: 10px;
    }
    span {
      font-weight: bold;
      color: darkgrey;
      font-size: 1.3;
    }
  }
`;