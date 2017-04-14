import React, { Component } from 'react';

export default class AddThis extends Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		thumbnail: React.PropTypes.string,
		description: React.PropTypes.string.isRequired,
	};
	
	/* global addthis */
	componentDidMount() {
		setTimeout(() => addthis.layers.refresh(), 250);
	}
	
	render() {
		let { title, thumbnail, description } = this.props;
		thumbnail = thumbnail || 'http://www.robbyschlesinger.com/assets/fa86c0354791db715b1fbf37461783d5.png';
		
		return (
			<div
				className="addthis_inline_share_toolbox"
				data-title={ title }
				data-media={ thumbnail }
				data-description={ description }
			></div>
		);
	}
}
