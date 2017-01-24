import styles from './contact.scss';

import React, { Component } from 'react';
import ContactForm from 'app-components/contactForm';

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
									
									<ContactForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
