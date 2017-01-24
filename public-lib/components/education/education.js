import styles from './education.scss';

import React, { Component } from 'react';

export default class Education extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section" id="education">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Education</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text">
									<div className="row">
										<div className="col-md-6">
											<div className="row">
												<div className="col-md-3 black">2015&ndash;2016</div>
												<div className="col-md-9">
													<h4 className="mt-0 mb-0">Master Degree in UI Web Design</h4>
													California Institute of Technology
												</div>
											</div>
											
											<hr />
											
											<div className="row">
												<div className="col-md-3 black">2014&ndash;2015</div>
												<div className="col-md-9">
													<h4 className="mt-0 mb-0">Internships in Software Engineering</h4>
													Massachusetts Institute of Technology
												</div>
											</div>
											
											<hr />
											
											<div className="row">
												<div className="col-md-3 black">2013&ndash;2014</div>
												<div className="col-md-9">
													<h4 className="mt-0 mb-0">Bachelor in Usability Engineering</h4>
													Johns Hopkins University
												</div>
											</div>
											
											<hr />
											
										</div>
										
										<div className="col-md-6">
											<div className="row">
												<div className="col-md-3 black">2012&ndash;2013</div>
												<div className="col-md-9">
													<h4 className="mt-0 mb-0">Internships in QA</h4>
													University of California, Berkeley
												</div>
											</div>
											
											<hr />
											
											<div className="row">
												<div className="col-md-3 black">2009&ndash;2013</div>
												<div className="col-md-9">
													<h4 className="mt-0 mb-0">Bachelor in Computer Science</h4>
													London School of Economics and Political Science
												</div>
											</div>
											
											<hr />
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
