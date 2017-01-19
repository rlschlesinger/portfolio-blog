import React, { Component } from 'react';
import Post from '../../post';

export default class Foo extends Component {
	static key = 'foo';
	static title = 'Foo!';
	static subtitle = 'Foobar and a half';
	static date = new Date('January 1, 2017');
	static blurb = 'Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.';
	static video = 'w2JUhDd0CAA';

	render() {
		return (
			<Post post={ this.constructor }>
				<p>Foooooo</p>
			</Post>
		);
	}
}
