import styled from 'styled-components';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  .item + .item {
    margin-left: 12px;
  }
`;

export default StyledUl;
