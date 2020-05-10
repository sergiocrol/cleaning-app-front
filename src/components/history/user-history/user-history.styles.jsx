import styled from 'styled-components';

const showFilter = ({ showfilter }) => {
  return showfilter === 'true' ? 'flex' : 'none';
}

export const ProfileUserFilter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  > span {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  div {
    position: absolute;
    width: 165px;
    height: 130px;
    background-color: ${props => props.theme.colors.background};
    border: 2px solid #d3d3d3;
    display: ${showFilter};
    flex-direction: column;
    font-size: 1.1rem;
    border-radius: 5px;
    bottom: -135px;
    padding: 5px;

    label {
      display: table;
      position: relative;
      padding-left: 1.8rem;
      cursor: pointer;
      margin-bottom: .5rem;

      input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }

      span {
        line-height: 1.54;
        font-size: 1rem;
        font-family: inherit;
      }

      input ~ div {
        position: absolute;
        top: 2px;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background: rgb(227, 232, 236);
        transition: background 250ms;
        border: none;
        border-radius: 0.327rem;
      }

      input ~ div::after {
        content: '';
        position: absolute;
        display: none;
        left: .45rem;
        top: .18rem;
        width: .25rem;
        height: .6rem;
        border: solid rgba(255, 255, 255, 1);
        border-width: 0 2px 2px 0;
        transition: background 250ms;
        transform: rotate(45deg);
      }

      input:checked ~ div::after {
        display: block;
      }

      input:checked ~ div {
        background: rgba(0, 130, 243, 1);
        border-color: rgba(0, 130, 243, 1);
      }

      div::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 3rem;
        height: 3rem;
        margin-left: -0.85rem;
        margin-top: -0.85rem;
        background: rgba(0, 130, 243, 1);
        border-radius: 2rem;
        opacity: .6;
        z-index: 99999;
        transform: scale(0);
      }
    }
  }
`;

export const ProfileUserJobs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;