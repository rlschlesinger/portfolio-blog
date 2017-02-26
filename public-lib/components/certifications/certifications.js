import styles from './certifications.scss';

import React, { Component } from 'react';

export default class Certifications extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section" id="skills">
					<div className="container-fluid relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Certifications</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text mb-50 mb-xs-30">
									
								</div>
								
								<div className="row">
									<div className="col-sm-6 mb-sm-50 mb-xs-30" >
										<div className='academy-badge'>
											<a href='http://academy.hubspot.com/certification' title='Inbound'>
												<img src='http://api.hubapi.com/academy/v1/badge-image/86a3f6b154df408a961aee4e2f4e76e0' />
											</a>
										</div>
									</div>
									
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<div className='academy-badge'>
											<a href='http://academy.hubspot.com/certification' title='Content Marketing'>
												<img src='http://api.hubapi.com/academy/v1/badge-image/17adbcb830a34aa3aca30cfc22187d7e' />
											</a>
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
