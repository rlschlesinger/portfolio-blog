import styles from './home.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import { Link } from 'react-router';

const MESSAGES = [
	'Web Developer',
	'Marketing Consultant',
	'Content Developer',
	'Grant Writer',
	'Editor',
];

export default class Home extends Component {
	constructor() {
		super();
		
		this.state = {
			message: 0,
			characters: 0,
			typing: true,
		};
	}
	
	componentWillMount() {
		this._timer = setInterval(() => {
			let { message, characters, typing } = this.state;
			
			characters += (typing ? 1 : -1);
			if (characters >= MESSAGES[message].length + 4) {
				typing = false;
			}
			
			if (characters <= -4) {
				typing = true;
				message = (message + 1) % MESSAGES.length;
			}
			
			this.setState({ message, characters, typing });
		}, 100);
	}
	
	componentWillUnmount() {
		clearInterval(this._timer);
	}
	
	render() {
		return (
			<div className={ styles.main }>
				<div className={ styles.snippet }>
					<div itemScope itemType="http://schema.org/LocalBusiness">
						<meta itemProp="description" content="Freelance writer, web developer, and marketing consultant specializing in inbound methodologies, content marketing, and front end design." />
						<link itemProp="url" href="http://www.robbyschlesinger.com/" rel="author" />
						<a itemProp="url" href="http://www.robbyschlesinger.com/"><span itemProp="name" style={{ display: 'block' }}><strong>Robby Schlesinger</strong></span></a>
						<div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
							<span itemProp="streetAddress" style={{ display: 'block' }}>100 N Arlington Ave #100</span>
							<span itemProp="postOfficeBoxNumber" style={{ display: 'block' }}>89503</span>
						<div>
							<span itemProp="addressLocality" style={{ display: 'block' }}>Reno</span>,
							<span itemProp="addressRegion" style={{ display: 'block' }}>NV</span>
						</div>
							<span itemProp="postalCode" style={{ display: 'block' }}>89503</span>
							<span itemProp="addressCountry" style={{ display: 'block' }}>United States</span>
						</div>
					</div>
				</div>
				<section className={ classes(styles.section, 'page-section') }>
					<div className={ classes(styles.typewriter, 'relative') }>
						Meet your new { MESSAGES[this.state.message].slice(0, Math.max(0, this.state.characters)) }
					</div>
					<Link to={ '/contact' } className={ styles.button }>Get In Touch</Link>
				</section>
			</div>
		);
	}
}
