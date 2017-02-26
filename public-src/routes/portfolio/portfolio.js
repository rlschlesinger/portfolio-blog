import styles from './portfolio.scss';

import React, { Component } from 'react';

export default class Portfolio extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<div className='academy-badge'>
					<a href='http://academy.hubspot.com/certification' title='Inbound'>
						<img src='http://api.hubapi.com/academy/v1/badge-image/86a3f6b154df408a961aee4e2f4e76e0' />
					</a>
				</div>
				
				<div className='academy-badge'>
					<a href='http://academy.hubspot.com/certification' title='Content Marketing'>
						<img src='http://api.hubapi.com/academy/v1/badge-image/17adbcb830a34aa3aca30cfc22187d7e' />
					</a>
				</div>

			</div>
		);
	}
}
