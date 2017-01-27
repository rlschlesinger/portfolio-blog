import './global/main.scss';

import GA from 'app-utils/ga';
import SmoothScroll from 'app-utils/smooth-scroll';

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router';
import App from './app';

window.onload = function() {
	SmoothScroll.init();
	
	const div = document.createElement('div');
	div.id = 'wrapper';
	document.body.appendChild(div);
	
	GA.init();
	
	ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
};
