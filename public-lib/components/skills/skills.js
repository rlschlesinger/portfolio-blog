import styles from './skills.scss';

import React, { Component } from 'react';

export default class Skills extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section>
					<div>
						<div>
							<div>
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Skills</h2>
							</div>
							
							<div>
								<div className="section-text mb-50 mb-xs-30">
									Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
									Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
									consectetur fermentum nibh volutpat, accumsan purus.
								</div>
								
								<div className="row">
									<div className="col-sm-6 mb-sm-50 mb-xs-30" >
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" div style={{ width: '100%' }}>
												Content Development: 100%
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												Front-End Design 95%
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
												Node.JS: 90%
											</div>
										</div>
									</div>
									
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												React.JS: 90%
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
												Inbound Marketing: 100% <span>75</span>
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
