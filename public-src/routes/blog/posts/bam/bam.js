import React, { Component } from 'react';
import Post from '../../post';

export default class Bam extends Component {
	static key = 'bam';
	static title = 'Bam!';
	static date = new Date('February 25, 2016');
	static blurb = 'Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.';
	static image = require('./media.gif');

	render() {
		return (
			<Post post={ this.constructor }>
				<p>Baaaaam</p>
			</Post>
		);
	}
}
