import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  min-height: 364px;
  min-width: 670px;

  .row th {
    padding: 4px 12px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  .row td {
    padding: 4px 8px;
    border-bottom: 1px solid grey;
  }
`;

export default StyledTable;
