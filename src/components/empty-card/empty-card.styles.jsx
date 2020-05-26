import styled from 'styled-components';

export const EmptyCardContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 15px 20px;
  align-items: center;
  height: 100px;

  svg {
      width: 80px;
      height: 80px;
      stroke: goldenrod;
      fill: goldenrod;
      margin-right: 10px;
    }

  span {
    font-size: .8rem;
  }
`;