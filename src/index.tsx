import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { GlobalStyle } from './App/styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
