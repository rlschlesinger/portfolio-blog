import classes from 'app-utils/classes';
import styles from './button.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Button extends Component {
	static propTypes = {
		variant: React.PropTypes.oneOf([ 'normal', 'gray', 'disabled' ]).isRequired,
		visible: React.PropTypes.bool.isRequired,
		to: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.object,
		]),
		href: React.PropTypes.string,
		className: React.PropTypes.string,
		children: React.PropTypes.node,
	};
	
	static defaultProps = {
		variant: 'normal',
		visible: true,
	};
	
	render() {
		let { children, className, variant, visible, ...props } = this.props;
		
		if (!visible) {
			return null;
		}
		
		if (variant === 'disabled') {
			delete props.to;
			delete props.href;
			delete props.onClick;
		}
		
		let Tag = 'button';
		if (props.to) {
			Tag = Link;
		}
		if (props.href) {
			Tag = 'a';
		}
		
		return (
			<Tag className={ classes(styles.main, className, styles[variant]) } { ...props }>
				{ children }
			</Tag>
		);
	}
}
