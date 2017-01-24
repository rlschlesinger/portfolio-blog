import React, { Component } from 'react';
import Post from '../../post';

export default class Foo extends Component {
	static key = 'defense-innovation';
	static title = 'Nonpartisan Innovation';
	static subtitle = 'Politically Agnostic Approaches to Problem-Solving';
	static date = new Date('December 12, 2016');
	static blurb = 'In the wake of the election, I have struggled, as many have, with a torrent of fears about the political landscape of the United States and the values of its people. When Trump won, I felt for the first time in my life a sense of hopelessness for the future of my country and, by extension, the world as a whole. Initially, I felt afraid, not so much for myself, but those that weren’t white, male, straight, and native-born who would face the worst of the new administration’s policies. Then, with each new appointment announced by the incoming president, the doom seemed closer and more over-arching; my gender, sexual orientation, and legal status would not protect me from damage done to the environment, the economy, or the country’s relations with foreign governments. I realized we were all in the same boat, headed straight toward the iceberg.';
	static video = 'w2JUhDd0CAA';

	render() {
		return (
			<Post post={ this.constructor }>
				<p>
					In the wake of the election, I have struggled, as many have, with a torrent of fears
					about the political landscape of the United States and the values of its people.
					When Trump won, I felt for the first time in my life a sense of hopelessness for the future
					of my country and, by extension, the world as a whole. Initially, I felt afraid, not so much
					for myself, but those that weren’t white, male, straight, and native-born who would face the
					worst of the new administration’s policies. Then, with each new appointment announced by the
					incoming president, the doom seemed closer and more over-arching; my gender, sexual orientation,
					and legal status would not protect me from damage done to the environment, the economy, or the
					country’s relations with foreign governments. I realized we were all in the same boat, headed
					straight toward the iceberg.
				</p>
			</Post>
		);
	}
}
