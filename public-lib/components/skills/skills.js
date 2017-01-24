import styles from './skills.scss';

import React, { Component } from 'react';

export default class Skills extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section" id="skills">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Skills</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text mb-50 mb-xs-30">
									Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
									Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
									consectetur fermentum nibh volutpat, accumsan purus.
								</div>
								
								<div className="row">
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
												Branding, % <span>90</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												Web Design, % <span>80</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
												CSS3, % <span>85</span>
											</div>
										</div>
									</div>
									
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												HTML5, % <span>80</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
												JS/jQuery, % <span>75</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
												Wordpress, % <span>65</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
