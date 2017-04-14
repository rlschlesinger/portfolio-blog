import styles from './post.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ContactForm from 'app-components/contactForm';

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
				
				<section className={ classes(styles.post, 'page-section')}>
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
				<ContactForm />
			</div>
		);
	}
}
