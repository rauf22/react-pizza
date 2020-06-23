import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const application = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

ReactDOM.render(application, document.getElementById('root'));
