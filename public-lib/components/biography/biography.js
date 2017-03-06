import styles from './biography.scss';
import classes from 'app-utils/classes';

import React, { Component } from 'react';

export default class Resume extends Component {
	render() {
		return (
			<div className={ classes(styles.main) }>
				<section className={ classes(styles.bio, 'page-section bg-dark bg-dark-alfa-70')}  id="home">
					<div className="relative container-fluid">
						<div className="home-content">
							<div className="home-text">
								<div className={ classes(styles.content, 'row')}>
									<div className="col-sm-6 col-lg-5 align-center pt-20 pt-lg-0 mb-xs-30">
										<div className="hs-line-4 font-alt mb-20">Robby Schlesinger</div>
										<h1 className={ classes(styles.titles, 'hs-line-15 font-alt mb-40 mb-xs-20')}>Freelance Writer, Web Developer, & Marketing Consultant</h1>
										<div className="section-text white mb-70 mb-xs-40 text-justify">
											<p>
												<span className="dropcap font-alt">I</span>&rsquo;m an out-of-the-box, versatile problem-solver with a sense of adventure and a signature style. I write words, programs, novels, grants, marketing plans, web content, and just about anything else you can think of. Sometimes, I swim around Lake Tahoe raising funds for suicide prevention.
											</p>
											<p>
												Got a project or an idea? I&rsquo;d love to hear more about it.
											</p>
											<hr className="white mb-30" />
											<div>
												<h4 className="font-alt mt-0 mb-20">Profile</h4>
												<div><strong>Location:</strong> Reno, NV</div>
												<div><strong>Phone:</strong> <a href="tel:17756854179">+1.755.685.4179</a></div>
												<div><strong>Email:</strong> <a href="mailto:robbyschlesinger@gmail.com">robbyschlesinger@gmail.com</a></div>
												<div><strong>Status:</strong> Available</div>
											</div>
										</div>
									</div>

									<div className={ classes(styles.profilePic, 'col-sm-6')}>
										<img src={ require('./assets/images/profile.png') } alt="" />
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
