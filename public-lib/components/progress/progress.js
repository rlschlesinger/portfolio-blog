import styles from './progress.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import ScrollCheck from 'app-utils/scroll-check';

export default class Progress extends Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		value: React.PropTypes.number.isRequired,
	};
	
	constructor() {
		super();
		
		this.scroll = new ScrollCheck();
		
		this.scroll.create('Progress', {
			classHide: styles.hide,
			create: (ref) => {
				this._ref = ref;
				requestAnimationFrame(() => this.update());
			},
		});
	}
	
	update() {
		if (!this._ref) {
			return;
		}
		
		let width = this._ref.offsetWidth;
		let parent = this._ref.parentNode.offsetWidth;
		
		this._ref.innerHTML = `${ this.props.label }: ${ Math.floor(width / parent * 100) }%`;
		
		requestAnimationFrame(() => this.update());
	}
	
	render() {
		return (
			<div className={ classes('progress tpl-progress', styles.main) }>
				<div
					className={ classes(styles.bar, 'progress-bar')}
					style={{ width: `${ Math.floor(this.props.value * 100) }%` }}
					ref={ this.scroll.registerProgress }
				>
					{ this.props.label }: { Math.floor(this.props.value * 100) }%
				</div>
			</div>
		);
	}
}
