import styles from './layout.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

export default class Layout extends Component {
	static propTypes = {
		children: React.PropTypes.node.isRequired,
	};
	
	constructor() {
		super();
		
		this.state = {
			mobile: false,
			closed: true,
		};
	}
	
	componentWillMount() {
		window.addEventListener('resize', () => this.update());
		this.update();
	}
	
	update() {
		let isMobile = window.innerWidth <= 1214;
		if (isMobile === this.state.mobile) {
			return;
		}
		
		if (isMobile && !this.state.mobile) {
			this.setState({ mobile: true });
		}
		
		if (!isMobile && this.state.mobile) {
			this.setState({ mobile: false });
		}
	}
	
	render() {
		return (
			<div className={ styles.main }>
				<a
					className={ classes('sp-button', this.state.mobile && 'mobile') }
					onClick={ () => this.setState({ closed: false }) }
				><span></span>Menu</a>
				
				<div className="sp-overlay"></div>
				<Sidebar
					mobile={ this.state.mobile }
					closed={ this.state.closed }
					onClose={ () => this.setState({ closed: true }) }
				/>
				
				<div className={ classes('page side-panel-is-left', this.state.mobile && 'mobile') } id="top">
					{ this.props.children }
					
					<Footer />
				</div>
			</div>
		);
	}
}
