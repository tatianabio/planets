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
`;

export default StyledPaginationButtons;
