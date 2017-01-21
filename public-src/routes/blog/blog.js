import styles from './blog.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';
import { Link } from 'react-router';

import posts_all from './posts';
const MONTHS = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

export default class Blog extends Component {
	static propTypes = {
		params: React.PropTypes.object.isRequired,
		location: React.PropTypes.object.isRequired,
	};
	
	render() {
		if (this.props.params.key) {
			for (let Post of posts_all) {
				if (Post.key === this.props.params.key) {
					return (
						<Post />
					);
				}
			}
		}
		
		let page_current = +(this.props.location.query && this.props.location.query.page) || 1;
		let page_count = Math.ceil(posts_all.length / 6);
		let posts = posts_all.sort((a, b) => b.date - a.date).slice((page_current - 1) * 6, page_current * 6);
		
		let pages = getPages(page_current, page_count);
		
		return (
			<div className={ styles.main }>
				<section className="small-section bg-gray-lighter">
					<div className="relative container align-left">
						<div className="row">
							<div className="col-md-8">
								<h1 className="hs-line-11 font-alt mb-20 mb-xs-0">Blog</h1>
								<div className="hs-line-4 font-alt black">
									Your source for tutorials, musings, and bad jokes.
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="page-section">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-10 col-sm-offset-1">
								{ posts.map(({ key, title, date, blurb, video, image }) =>
									<div key={ key } className="blog-item">
										<div className="blog-item-date">
											<span className="date-day">{ date.getDate() < 10 ? `0${ date.getDate() }` : `${ date.getDate() }` }</span>
											<span className="date-month">{ MONTHS[date.getMonth()] }</span>
											<span className="date-year">{ date.getFullYear() }</span>
										</div>
										
										<h2 className="blog-item-title font-alt"><Link to={ `/blog/${ key }` }>{ title }</Link></h2>
										
										{ video && (
											<div className="blog-media">
												<iframe width="640" height="360" src={ `https://www.youtube.com/embed/${ video }` } frameBorder="0" allowFullScreen></iframe>
											</div>
										) }
										
										{ image && (
											<div className="blog-media">
												<Link to={ `/blog/${ key }` }><img src={ image } alt={ blurb } /></Link>
											</div>
										) }
										
										<div className="blog-item-body">
											<p>{ blurb }</p>
										</div>
										
										<div className="blog-item-foot">
											<Link to={ `/blog/${ key }` } className="btn btn-mod btn-round btn-small">Read More <i className="fa fa-angle-right"></i></Link>
										</div>
									</div>
								) }
								
								<div className="pagination">
									<Link className={ classes({ disabled: page_current === 1 }) } aria-label="First" to="/blog?page=1">
										<span aria-hidden="true" className="fa fa-angle-double-left"></span>
										<span className="sr-only">First</span>
									</Link>
									<Link className={ classes({ disabled: page_current === 1 }) } aria-label="Previous" to={ `/blog?page=${ page_current - 1 }` }>
										<span aria-hidden="true" className="fa fa-angle-left"></span>
										<span className="sr-only">Previous</span>
									</Link>
									
									{ pages.map((page) => (
										<Link key={ page } className={ classes({ active: page === page_current }) } to={ `/blog?page=${ page }` }>
											{ page }
											{ page === page_current && <span className="sr-only">(current)</span> }
										</Link>
									)) }
									
									<Link className={ classes({ disabled: page_current === page_count }) } aria-label="Next" to={ `/blog?page=${ page_current + 1 }` }>
										<span aria-hidden="true" className="fa fa-angle-right"></span>
										<span className="sr-only">Next</span>
									</Link>
									<Link className={ classes({ disabled: page_current === page_count }) } aria-label="Last" to={ `/blog?page=${ page_count }` }>
										<span aria-hidden="true" className="fa fa-angle-double-right"></span>
										<span className="sr-only">Last</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

function getPages(current, count) {
	let start = Math.ceil(current - (5 - 1) / 2);
	start = Math.max(1, start);
	let end = start + 5 - 1;
	
	if (end > count) {
		end = count;
		start = end - 5 + 1;
		
		start = Math.max(1, start);
	}
	
	let pages = [];
	
	for (let page = start; page <= end; page++) {
		pages.push(page);
	}
	
	return pages;
}
