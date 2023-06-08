import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root'); // Remove ReactDOM.createRoot()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);
