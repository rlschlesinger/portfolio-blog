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
														If you need it, I can make it.
												</div>
										</div>
								</div>

						</div>
				</section>

				<section className={classes(styles.project, styles.interkn, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
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

				<section className={classes(styles.project, styles.corkboard, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
						<div className="js-height-parent container-fluid  relative">

								<div className="home-content">
										<div className="home-text">

												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														Pinterest Clone
												</h2>

												<div>
														<a href="https://nameless-stream-77226.herokuapp.com/" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
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
														<a href="https://github.com/rlschlesinger/node-scrapers" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>

										</div>
								</div>

						</div>
				</section>

				<section className={classes(styles.project, styles.whitepapers, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
						<div className="js-height-parent container-fluid relative">

								<div className="home-content">
										<div className="home-text">

												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														White Papers
												</h2>

												<div>
														<a href="https://uploads.interkn.com/resources/white-paper.pdf" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>

										</div>
								</div>

						</div>
				</section>

				<section className={classes(styles.project, styles.seo, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
						<div className="js-height-parent container-fluid relative">

								<div className="home-content">
										<div className="home-text">

												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														SEO Strategies
												</h2>

												<div>
														<a href="https://docs.google.com/presentation/d/13Qw0yTIJGZZ6oYuNseKSZqwWUEgDWvhtZvF2W0NhCNY/edit?usp=sharing" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>

										</div>
								</div>

						</div>
				</section>

				<section className={classes(styles.project, styles.fantasy, 'page-section fixed-height-small pt-0 pb-0 bg-dark bg-dark-alfa-70')}>
						<div className="js-height-parent container-fluid relative">

								<div className="home-content">
										<div className="home-text">

												<h2 className="hs-line-14 font-alt mb-50 mb-xs-30">
														Creative Writing
												</h2>

												<div>
														<a href="https://www.amazon.com/Shifter-Crimson-Eclipse-Robby-Schlesinger/dp/0615191827" className="btn btn-mod btn-border-w btn-medium btn-round">View Project</a>
												</div>

										</div>
								</div>

						</div>
				</section>

				<section className="small-section bg-dark">
						<div className="container-fluid relative">

								<div className="align-center">
										<h3 className="banner-heading font-alt">Like what you see? Then let&rsquo;s work together.</h3>
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
