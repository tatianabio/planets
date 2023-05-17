import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import App from './App.tsx';
import './index.scss';

const StyledApp = styled(App)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: #7E569C;
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledApp />
  </React.StrictMode>,
);
