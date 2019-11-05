/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles-mobile.css';
import './styles-desktop.css';
import './styles.css';
import Router from './router';

ReactDOM.render(<Router />, document.getElementById('root'));
