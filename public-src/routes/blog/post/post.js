import styles from './post.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import AddThis from 'app-components/add-this';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';

export default class Post extends Component {
	static propTypes = {
		post: React.PropTypes.func.isRequired,
		children: React.PropTypes.node.isRequired,
	};
	
	render() {
		const meta = {
			title: `${this.props.post.title}: ${this.props.post.subtitle}`,
			description: this.props.post.blurb,
			meta: {
				charset: 'utf-8',
			},
		};
		return (
			<div className={ styles.main }>
				<DocumentMeta {...meta} />
				<section className={classes(styles.topbar, 'small-section bg-gray-lighter')}>
					<div className="relative container align-left">
						<div className="row">
							<div className="col-md-8">
								<h1 className="hs-line-11 font-alt mb-20 mb-xs-0">{ this.props.post.title }</h1>
								{ this.props.post.subtitle && (
									<div className="hs-line-4 font-alt black">
										{ this.props.post.subtitle }
									</div>
								) }
								<div className={ styles.share }>
									<AddThis
										title={ `${this.props.post.title}: ${this.props.post.subtitle}` }
										description={ this.props.post.blurb }
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className={ classes(styles.post)}>
					<div className="container-fluid relative">
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
				
				<section className="small-section bg-dark">
						<div className="container-fluid relative">

								<div className="align-center">
										<h3 className="banner-heading font-alt">Got an idea for a project? I&rsquo;d love to hear about it.</h3>
										<div>
												<Link to='/contact' className="btn btn-mod btn-w btn-medium btn-round">Start Project</Link>
										</div>
								</div>

						</div>
				</section>
			</div>
		);
	}
}
