import styles from './experience.scss';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Experience extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section" id="expirience">
					<div className="container-fluid relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Experience</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text">
									<div className="row">
										<div className="col-md-2 black">2016&ndash;Present</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Marketing Executive</h4>
											Head of marketing for a small SaaS startup connecting small businesses to SBIR and STTR
											funding opportunities. In addition to desigining the front-end UI/UX, I developed and
											executed our content marketing strategy, increasing newsletter subscribers from 76 to
											4,000 within a month. I also produced our original podcast, coordinating with guests
											from multiple market sectors and mixing down each episode with Adobe Audition.
										</div>
									</div>
									
									<hr />
									
									<div className="row">
										<div className="col-md-2 black">2016</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Copywriter & Web Developer</h4>
											In this dual role, I worked at a boutique advertising agency with the design team to develop custom WordPress templates, HTML emails, and other web-based projects.
											Additionally, I wrote internal and external copy across a wide range of contexts, mediums, and audiences, including a full-length online course on entrepreneurship, tech startups, and venture capital funding, with quizzes, tests, and study materials.
										</div>
									</div>
									
									<hr />
									
									<div className="row">
										<div className="col-md-2 black">2015&ndash;2016</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Data Analyst</h4>
											I worked closely with engineering to interpret big data sets and analyze results using statistical
											techniques to improve the performance of our SaaS product. I also aggregated digital content from
											multiple platforms to provide customer with compelling events.
										</div>
									</div>
									
									<hr />
									
									<div className="row">
										<div className="col-md-2 black">2009&ndash;2015</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Editor & Freelance Writer</h4>
											From novels to theses, from SBIR proposals to online courses, I&rsquo; written and edited hundreds of writing projects of varying lengths, contexts, and purposes. For examples of my writing, check out my <Link to="/portfolio/writing">writing portfolio</Link>.
										</div>
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
