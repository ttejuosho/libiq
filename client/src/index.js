import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from "./config/routes";



ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
