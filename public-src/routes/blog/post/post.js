import styles from './post.scss';

import React, { Component } from 'react';

export default class Post extends Component {
	static propTypes = {
		post: React.PropTypes.func.isRequired,
		children: React.PropTypes.node.isRequired,
	};
	
	render() {
		return (
			<div className={ styles.main }>
				<section className="small-section bg-gray-lighter">
					<div className="relative container align-left">
						<div className="row">
							<div className="col-md-8">
								<h1 className="hs-line-11 font-alt mb-20 mb-xs-0">{ this.props.post.title }</h1>
								{ this.props.post.subtitle && (
									<div className="hs-line-4 font-alt black">
										{ this.props.post.subtitle }
									</div>
								) }
							</div>
						</div>
					</div>
				</section>
				
				<section className="page-section">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-10 col-sm-offset-1">
								<div className="blog-item mb-80 mb-xs-40">
									<div className="blog-item-body">
										{ this.props.children }
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
