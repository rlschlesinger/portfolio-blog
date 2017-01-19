import styles from './home.scss';

import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section bg-gray-lighter pt-0 pb-0">
					<div className="relative">
						<ul className="works-grid work-grid-3 clearfix font-alt hide-titles hover-white">
							<li className="work-item wow fadeIn" data-wow-delay="0.1s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-1.jpg" alt="" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 1</h3>
										<div className="work-descr">
											10 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.2s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-2.jpg" alt="Work" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 2</h3>
										<div className="work-descr">
											15 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.3s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-3.jpg" alt="Work" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 3</h3>
										<div className="work-descr">
											11 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.4s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-4.jpg" alt="" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 1</h3>
										<div className="work-descr">
											10 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.5s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-5.jpg" alt="Work" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 2</h3>
										<div className="work-descr">
											15 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.6s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-6.jpg" alt="Work" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 3</h3>
										<div className="work-descr">
											11 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.1s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-7.jpg" alt="" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 1</h3>
										<div className="work-descr">
											10 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.2s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-8.jpg" alt="Work" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 2</h3>
										<div className="work-descr">
											15 Photos
										</div>
									</div>
								</a>
							</li>
							
							<li className="work-item wow fadeIn" data-wow-delay="0.3s">
								<a href="special-photographer-2-portfolio.html">
									<div className="work-img">
										<img src="images/photographer/photographer-2/photo-9.jpg" alt="Work" />
									</div>
									<div className="work-intro">
										<h3 className="work-title">Album 3</h3>
										<div className="work-descr">
											11 Photos
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</section>
				
				<section className="page-section bg-gray-lighter">
					<div className="relative">
						<div className="container-fluid">
							<h2 className="section-title font-alt mb-70 mb-sm-40">
								Extraordinary Photographer
							</h2>
							
							<div className="row">
								<div className="col-sm-5 col-sm-offset-1">
									<div className="section-text mb-70 mb-xs-40">
										<span className="dropcap font-alt">M</span>arius&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor In&nbsp;maximus ligula semper
										metus pellentesque mattis.Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam.
										Sed id&nbsp;dolor consectetur fermentum nibh volutpat, accumsan purus.
									</div>
								</div>
								
								<div className="col-sm-5">
									<div className="section-text mb-70 mb-xs-40">
										<span className="dropcap font-alt">P</span>hasellus consectetur vel nunc vitae tempus. Maecenas commodo ipsum non est consequat euismod.
										Aenean sit amet urna ac velit dapibus ullamcorper at ac ligula. Duis sed laoreet leo.
										Morbi ac semper lorem ipsum tortor.
									</div>
								</div>
							</div>
							
							<div className="align-center">
								<img src="images/photographer/signature.png" width="170" height="55" alt="" />
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
