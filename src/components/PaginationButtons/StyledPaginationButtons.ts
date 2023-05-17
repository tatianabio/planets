import styled from 'styled-components';
import PaginationButtons from './PaginationButtons';

const StyledPaginationButtons = styled(PaginationButtons)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  .item + .item {
    margin-left: 12px;
  }

  .button {
    font-weight: bold;
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    background-color: #CEC7D3;

    &:hover {
      background-color: #C5B2D4;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #7E569C;
      background-color: #EAD4FA;
    }

    &:active {
      opacity: 0.6;
      box-shadow: none;
    }
  }

  .button--active,
  .button--active:hover,
  .button--active:focus,
  .button--active:active
  {
    color: white;
    cursor: default;
    background-color: #795B90;
    box-shadow: 0 0 0 2px #795B90,
    inset 0 0 0 2px white;
  }

`;

export default StyledPaginationButtons;
