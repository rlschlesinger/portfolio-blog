import styles from './footer.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import ScrollCheck from 'app-utils/scroll-check';

export default class Footer extends Component {
	constructor() {
		super();
		
		this.scroll = new ScrollCheck();
		
		this.scroll.create('Logo', {
			fadeInUp: 'fadeInUp',
		});
	}
	
	render() {
		return (
			<footer className={ classes(styles.main, 'footer pb-60') }>
				<div className="container-fluid">
					<div className={ classes(styles.logo, 'local-scroll mb-30 wow fadeInUp') } data-wow-duration="1.2s">
						<a href="#top"><img src={ require('./assets/images/logo.png') } width="78" height="36" alt="" ref={ this.scroll.registerLogo }/></a>
					</div>
					
					<div className="footer-social-links mb-110 mb-xs-60">
					<a href="https://www.linkedin.com/in/robby-schlesinger-70b5b6a3" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/rlschlesinger" target="_blank"><i className="fa fa-github-alt"></i></a>
					<a href="https://twitter.com/rlschlesinger" target="_blank"><i className="fa fa-twitter"></i></a>
					<a href="https://angel.co/robby-schlesinger" target="_blank"><i className="fa fa-angellist"></i></a>
					</div>
				</div>
			</footer>
		);
	}
}
