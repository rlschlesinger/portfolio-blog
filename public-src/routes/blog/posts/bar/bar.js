import React, { Component } from 'react';
import Post from '../../post';

export default class Bar extends Component {
	static key = 'bar';
	static title = 'Bar!';
	static date = new Date('January 10, 2016');
	static blurb = 'Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.';

	render() {
		return (
			<Post post={ this.constructor }>
				<p>Baaaaar</p>
			</Post>
		);
	}
}
