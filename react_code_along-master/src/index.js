import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Import App has to happen after bootstrap is imported.
import Navigation from './components/navigation.js'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navigation/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));

