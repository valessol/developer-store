import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.scss'
import { UIProvider } from './components/Context/UIContext';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

