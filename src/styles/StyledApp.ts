import styled from 'styled-components';
import App from '../App';

const StyledApp = styled(App)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  .container {
    position: relative;

  }

  .loading {
    position: absolute;
    display: grid;
    place-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 400px;
    min-height: 200px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 0 3px grey;
  }

  .pagination-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

`;

export default StyledApp;
