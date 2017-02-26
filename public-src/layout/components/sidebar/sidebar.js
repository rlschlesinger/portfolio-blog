import styles from './sidebar.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import { Link } from 'react-router';

const MENU = [
	{ label: 'Home', to: '/home' },
	{ label: 'Resume', to: '/resume' },
	{ label: 'Portfolio', to: '/portfolio', children: [
		{ label: 'WebDev', to: '/portfolio/webdev' },
		{ label: 'Writing', to: '/portfolio/writing' },
		{ label: 'Marketing', to: '/portfolio/marketing' },
	] },
	{ label: 'Blog', to: '/blog' },
	{ label: 'Contact', to: '/contact' },
];

export default class Sidebar extends Component {
	static propTypes = {
		mobile: React.PropTypes.bool.isRequired,
		closed: React.PropTypes.bool.isRequired,
		onClose: React.PropTypes.func.isRequired,
	};
	
	constructor() {
		super();
		
		this.state = {};
	}
	
	render() {
		return (
			<div className={ classes(styles.main, 'side-panel', this.props.mobile && 'mobile', this.props.closed && 'closed') }>
				<div
					className={ classes('sp-close-button', this.props.mobile && 'mobile') }
					onClick={ this.props.onClose }
				></div>
				
				<div className="sp-logo-wrap local-scroll mb-40 mb-md-10 mb-xs-0">
					<Link to="/" className={ classes(styles.logo, 'logo') }></Link>
					<div className={ styles.title }>
						<div className={ styles.name }>ROBBY SCHLESINGER</div>
					</div>
				</div>
				
				<div className="sp-wrapper" id="side-panel-menu">
					<ul className={ classes('sp-menu-links local-scroll', styles.navigation) }>
						{ MENU.map(({ label, to, children }, key) =>
							<li key={ key } className={ classes(this.state[to] && 'js-opened') }>
								{ !children || children.length === 0 ? (
									<Link
										to={ to }
										activeClassName="active"
									>{ label }</Link>
								) : (
									<Link
										to={ to }
										activeClassName="active"
										onClick={ (e) => {
											e.preventDefault();
											
											this.setState({ [to]: !this.state[to] });
										} }
									>
										{ label }
										<i className={ classes('fa fa-angle-down', this.state[to] && 'fa-rotate-180') }></i>
									</Link>
								) }
								
								{ children && (
									<ul className="sp-sub" style={{ display: this.state[to] ? 'block' : 'none' }}>
										{ children.map(({ label, to }, key) =>
											<li key={ key }>
												<Link to={ to } activeClassName="active">{ label }</Link>
											</li>
										) }
									</ul>
								) }
							</li>
						) }
					</ul>
				</div>
				
				<div className="sp-social-links">
					<a href="https://www.linkedin.com/in/robby-schlesinger-70b5b6a3" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/rlschlesinger" target="_blank"><i className="fa fa-github-alt"></i></a>
					<a href="https://twitter.com/rlschlesinger" target="_blank"><i className="fa fa-twitter"></i></a>
					<a href="https://angel.co/robby-schlesinger" target="_blank"><i className="fa fa-angellist"></i></a>
				</div>
			</div>
		);
	}
}
