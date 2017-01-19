import styles from './footer.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className={ classes(styles.main, 'page-section bg-gray-lighter footer pb-60') }>
				<div className="container-fluid">
					<div className="local-scroll mb-30 wow fadeInUp" data-wow-duration="1.2s">
						<a href="#top"><img src={ require('./assets/images/logo.png') } width="78" height="36" alt="" /></a>
					</div>
					
					<div className="footer-social-links mb-110 mb-xs-60">
						<a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
						<a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
						<a href="#" title="Behance" target="_blank"><i className="fa fa-behance"></i></a>
						<a href="#" title="LinkedIn+" target="_blank"><i className="fa fa-linkedin"></i></a>
						<a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
					</div>
					
					<div className="footer-text">
						<div className="footer-copy font-alt">
							<a href="http://themeforest.net/user/theme-guru/portfolio" target="_blank">&copy; Rhythm 2016</a>.
						</div>
						
						<div className="footer-made">
							Made with love for great people.
						</div>
					</div>
				</div>
				
				<div className="local-scroll">
					<a href="#top" className="link-to-top"><i className="fa fa-caret-up"></i></a>
				</div>
			</footer>
		);
	}
}
