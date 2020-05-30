import styled from 'styled-components';

export const SlideFirstContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 65%;
    margin-top: 20px;
  }
`;

export const SlideFirstBody = styled.div`
  text-align: center;
  margin-bottom: 90px;
  padding: 0 30px;

  h3 {
    margin: 5px 0 5px 0;
  }

  span {
    font-size: .9rem;
  }
`;