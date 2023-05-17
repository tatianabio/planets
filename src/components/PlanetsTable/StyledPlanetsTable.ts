import styled from 'styled-components';
import PlanetsTable from './PlanetsTable';

const StyledPlanetsTable = styled(PlanetsTable)`
  border-collapse: collapse;
  min-height: 364px;
  min-width: 670px;

  .planets-table__row th {
    padding: 4px 12px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  .planets-table__row td {
    padding: 4px 8px;
    border-bottom: 1px solid grey;
  }
`;

export default StyledPlanetsTable;
