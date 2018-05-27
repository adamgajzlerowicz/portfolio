/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles-mobile.css';
import './styles-desktop.css';
import './styles.css';
import Home from './components/home';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
// registerServiceWorker();
