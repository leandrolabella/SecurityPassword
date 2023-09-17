import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PasswordGenerator from './components/PasswordGenerator'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordGenerator></PasswordGenerator>
  </React.StrictMode>
);