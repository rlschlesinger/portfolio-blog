import styles from './error404.scss';

import React, { Component } from 'react';

export default class Error404 extends Component {
	render() {
		return (
			<div className={ styles.main }>
				Error 404
			</div>
		);
	}
}