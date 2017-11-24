import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Import App has to happen after bootstrap is imported.
import App from './App';

ReactDOM.render(
    <App />, 
    document.getElementById('root'));

