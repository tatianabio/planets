import styled from 'styled-components';

const StyledPaginationButton = styled.button`
  background-color: ${(props) => (props.$isActive ? '#795B90' : '#CEC7D3')};
  color: ${(props) => (props.$isActive ? 'white' : 'inherit')};
  cursor:  ${(props) => (props.$isActive ? 'default' : 'pointer')};
  box-shadow: ${(props) => (props.$isActive ? '0 0 0 2px #795B90,\n    inset 0 0 0 2px white' : 'none')};
  font-weight: bold;
  width: 40px;
  height: 40px;
  padding: 10px;
  border: 0;
  border-radius: 50%;
  

  &:hover {
    background-color: ${(props) => (props.$isActive ? '#795B90' : '#C5B2D4')};
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) => (props.$isActive ? '0 0 0 2px #795B90,\n    inset 0 0 0 2px white' : '0 0 0 3px #7E569C')};
    background-color: ${(props) => (props.$isActive ? '#795B90' : '#EAD4FA')};
  }

  &:active {
    opacity: ${(props) => (props.$isActive ? '1' : '0.6')};
    box-shadow: ${(props) => (props.$isActive ? '0 0 0 2px #795B90,\n    inset 0 0 0 2px white' : 'none')};
  }
`;

export default StyledPaginationButton;
