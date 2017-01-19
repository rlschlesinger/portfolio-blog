import styles from './layout.scss';

import React, { Component } from 'react';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

export default class Layout extends Component {
	static propTypes = {
		children: React.PropTypes.node.isRequired,
	};
	
	render() {
		return (
			<div className={ styles.main }>
				<a href="#" className="sp-button"><span></span>Menu</a>
				<div className="sp-overlay"></div>
				<Sidebar />
				
				<div className="page side-panel-is-left" id="top">
					{ this.props.children }
					
					<Footer />
				</div>
			</div>
		);
	}
}
