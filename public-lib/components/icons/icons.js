import styles from './icons.scss';

import React, { Component } from 'react';

export default class Icons extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section bg-dark-lighter bg-dark-alfa-70" data-background="images/cv-resume/section-bg-1.jpg">
					<div className="container-fluid relative">
						<div className="row alt-features-grid font-alt">
							<div className="col-sm-4 wow fadeInRight" data-wow-delay="0.1s">
								<div className="alt-features-item align-center">
									<div className="alt-features-icon white">
										<span className="icon-telescope"></span>
									</div>
									<h3 className="alt-features-title">Unique Methods</h3>
								</div>
							</div>
							
							<div className="col-sm-4 wow fadeInRight" data-wow-delay="0.2s">
								<div className="alt-features-item align-center">
									<div className="alt-features-icon white">
										<span className="icon-presentation"></span>
									</div>
									<h3 className="alt-features-title">Quality Services</h3>
								</div>
							</div>
							
							<div className="col-sm-4 wow fadeInRight" data-wow-delay="0.3s">
								<div className="alt-features-item align-center">
									<div className="alt-features-icon white">
										<span className="icon-piechart"></span>
									</div>
									<h3 className="alt-features-title">Excellent Results</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
