import styles from './portfolio.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Portfolio extends Component {
	render() {
		return (
			<div classNameName={ styles.main }>
				<section className={ classes(styles.head, 'small-section bg-dark bg-dark-alfa-70 parallax-2')} data-background="images/full-width-images/section-bg-18.jpg">
						<div className="relative container-fluid">
								
								<div className="row">
										
										<div className="col-md-8">
												<h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Portfolio</h1>
												<div className="hs-line-4 font-alt">
														An eye for detail makes our works excellent
												</div>
										</div>
								</div>
								
						</div>
				</section>

				<section className={classes(styles.project, 'page-section fixed-height-small pt-0 pb-0 bg-dark-alfa-30')}>
						<div className="js-height-parent container-fluid relative">
								
								<div className={classes(styles.content, 'home-content')}>
										<div className="home-text">
												
												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														Government Funding Aggregator
												</h2>
												
												<div>
														<a href="https://www.interkn.com/landing" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>
												
										</div>
								</div>
								
						</div>
				</section>

				<section className={classes(styles.project, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
						<div className="js-height-parent container-fluid  relative">
								
								<div className="home-content">
										<div className="home-text">

												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														Another Project
												</h2>
												
												<div>
														<a href="#" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>
												
										</div>
								</div>
								
						</div>
				</section>

				<section className={classes(styles.project, styles.scrapers, 'page-section fixed-height-small pt-0 pb-0 bg-dark-alfa-30')}>
						<div className="js-height-parent container-fluid relative">
								
								<div className="home-content">
										<div className="home-text">
	
												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														Web Scrapers
												</h2>
												
												<div>
														<a href="#" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>
												
										</div>
								</div>
								
						</div>
				</section>
				
				<section className={classes(styles.project, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
						<div className="js-height-parent container-fluid relative">
								
								<div className="home-content">
										<div className="home-text">
					
												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														Print Mockup
												</h2>
												
												<div>
														<a href="#" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>
												
										</div>
								</div>
								
						</div>
				</section>
				
				<section className="small-section bg-dark">
						<div className="container-fluid relative">
								
								<div className="align-center">
										<h3 className="banner-heading font-alt">Like Our Creative Works?</h3>
										<div>
												<Link to='/contact' className="btn btn-mod btn-w btn-medium btn-round">Start Project</Link>
										</div>
								</div>
								
						</div>
				</section>
			
			</div>
		);
	}
}
