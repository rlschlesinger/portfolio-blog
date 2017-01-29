import styles from './contactForm.scss';

import React, { Component } from 'react';

export default class ContactForm extends Component {
	constructor() {
		super();
		
		this.state = {
			submitted: false,
		};
	}
	
	submit(e) {
		e.preventDefault();
		
		fetch('https://docs.google.com/forms/d/e/1FAIpQLSe8wkk0kkLb30XI_idOZT8_6rvuuOcKPgSPHEUzDqzZApu5EA/formResponse', {
			method: 'POST',
			mode: 'no-cors',
			body: new FormData(document.getElementById('contact_form')),
		}).then(() => {
			this.setState({ submitted: true });
		});
		
		return false;
	}
	
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section" id="contact">
					<div className="container-fluid relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Contact</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text mb-70 mb-xs-40">
									Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
								</div>
								
								<div className="row">
									<div className="col-sm-5 mb-sm-60">
										<div className="contact-item mb-30">
											<div className="ci-icon">
												<i className="fa fa-phone"></i>
											</div>
											<div className="ci-title font-alt">
												Phone
											</div>
											<div className="ci-text">
												+11 3 8376 6284
											</div>
										</div>
										
										<hr className="mb-30"/>
										
										<div className="contact-item mb-30">
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
										
										<hr className="mb-30"/>
										
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
													<input type="text" name="entry.260940075" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" required />
												</div>
												
												<div className="form-group">
													<input type="email" name="entry.533924323" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" required />
												</div>
												
												<div className="form-group">
													<textarea name="entry.1991725719" id="message" className="input-md round form-control" style={{ height: '100px' }} placeholder="Message" required></textarea>
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
														{ this.state.submitted ? (
															<p>Thanks</p>
														) : (
															<button className="submit_btn btn btn-mod btn-medium btn-circle" onClick={ (e) => this.submit(e) } id="submit_btn">Submit</button>
														)}
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
				</section>
			</div>
		);
	}
}
