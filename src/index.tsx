import React from 'react';
import ReactDOM from 'react-dom';

import { setupServer } from './services/mirage/server';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
