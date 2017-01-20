import styles from './contact.scss';

import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section pt-80 pt-sm-60 pt-xs-40 bg-gray-lighter">
					<div className="relative">
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-10 col-sm-offset-1">
									<h1 className="section-title font-alt mb-80 mb-sm-50">Do not delay, say hello!</h1>
									
									<div className="google-map mb-80 mb-xs-50">
										<div data-address="Belt Parkway, Queens, NY, United States" id="map-canvas"></div>
									</div>
									
									<div className="row">
										<div className="col-sm-5 mb-sm-60">
											<div className="contact-item mb-20">
												<div className="ci-icon">
													<i className="fa fa-phone"></i>
												</div>
												<div className="ci-title font-alt">
													Call Us
												</div>
												<div className="ci-text">
													+1 775 685 4179
												</div>
											</div>
											
											<hr className="mb-20"/>
											
											<div className="contact-item mb-20">
												<div className="ci-icon">
													<i className="fa fa-map-marker"></i>
												</div>
												<div className="ci-title font-alt">
													Address
												</div>
												<div className="ci-text">
													245 Quigley Blvd, Ste K
												</div>
											</div>
											
											<hr className="mb-20"/>
											
											<div className="contact-item">
												<div className="ci-icon">
													<i className="fa fa-envelope"></i>
												</div>
												<div className="ci-title font-alt">
													Email
												</div>
												<div className="ci-text">
													<a href="mailto:support@bestlooker.pro">support@bestlooker.pro</a>
												</div>
											</div>
										</div>
										
										<div className="col-sm-7">
											<form className="form contact-form" id="contact_form">
												<div className="clearfix">
													<div className="form-group">
														<input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" required />
													</div>
													
													<div className="form-group">
														<input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" required />
													</div>
													
													<div className="form-group">
														<textarea name="message" id="message" className="input-md round form-control" style={{ height: '100px' }} placeholder="Message"></textarea>
													</div>
												</div>
														
												<div className="clearfix">
													<div className="cf-left-col">
														<div className="form-tip pt-20">
															<i className="fa fa-info-circle"></i> All the fields are required
														</div>
													</div>
													
													<div className="cf-right-col">
														<div className="align-right pt-10">
															<button className="submit_btn btn btn-mod btn-medium btn-round" id="submit_btn">Submit</button>
														</div>
													</div>
												</div>
												<div id="result"></div>
											</form>
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
