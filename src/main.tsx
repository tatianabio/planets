import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import StyledApp from './StyledApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledApp />
  </React.StrictMode>,
);
