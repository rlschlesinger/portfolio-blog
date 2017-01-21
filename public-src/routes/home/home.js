import styles from './home.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import { Link } from 'react-router';

const MESSAGES = [
	'Web Developer',
	'Marketer',
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
				<section className="page-section">
					<div className={ classes(styles.typewriter, 'relative') }>
						Meet your new { MESSAGES[this.state.message].slice(0, Math.max(0, this.state.characters)) }
					</div>
					<Link to={ '/contact' } className={ styles.button }>Get In Touch</Link>
				</section>
			</div>
		);
	}
}
