
import styles from './sidebar.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import { Link } from 'react-router';

const MENU = [
	{ label: 'Home', to: '/' },
	{ label: 'Resume', to: '/resume' },
	{ label: 'Portfolio', to: '/portfolio', children: [
		{ label: 'WebDev', to: '/webdev' },
		{ label: 'Writing', to: '/writing' },
		{ label: 'Marketing', to: '/marketing' },
	] },
	{ label: 'Blog', to: '/blog' },
	{ label: 'Contact', to: '/contact' },
];

export default class Sidebar extends Component {
	render() {
		return (
			<div className={ classes(styles.main, 'side-panel') }>
				<a href="#" className="sp-close-button"></a>
				
				<div className="sp-logo-wrap local-scroll mb-40 mb-md-10 mb-xs-0">
					<Link to="/" className={ classes(styles.logo, 'logo') }></Link>
					<div className={ styles.title }>
						<div className={ styles.name }>ROBBY SCHLESINGER</div>
					</div>
				</div>
				
				<div className="sp-wrapper" id="side-panel-menu">
					<ul className="sp-menu-links local-scroll">
						{ displayMenuItems(MENU) }
					</ul>
				</div>
				
				<div className="sp-social-links">
					<a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="#" target="_blank"><i className="fa fa-github-alt"></i></a>
					<a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
				</div>
			</div>
		);
	}
}

function displayMenuItems(children, prefix = '') {
	return children.map(({ label, to, children }, key) =>
		<li key={ key }>
			<Link to={ `${ prefix }${ to }` } activeClassName="active">{ label }</Link>
			
			{ children && (
				<ul>
					{ displayMenuItems(children, `${ prefix }${ to }`) }
				</ul>
			) }
		</li>
	);
}
