import styles from './error404.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Error404 extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<div className={ classes(styles.top, styles.message) }>Not all those who wander are lost...but you are</div>
				<div className={ styles.question }><span className={ styles.q1 }><span className={ styles.q11 }>?</span></span></div>
				<div className={ styles.frodo }>
					<img className={ styles.arms } src={ require('./assets/images/maparms.png') } alt="Error404" />
				</div>
			</div>
		);
	}
}
