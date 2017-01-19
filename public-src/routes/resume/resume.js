import styles from './resume.scss';

import React, { Component } from 'react';

export default class Resume extends Component {
	render() {
		return (
			<div className={ styles.main }>
				{ /* Home Section */ }
				<section className="page-section bg-dark bg-dark-alfa-70" data-background="images/cv-resume/section-bg-1.jpg" id="home">
					<div className="relative container">
						<div className="home-content">
							<div className="home-text">
								<div className="row mt-60 mt-xs-20">
									<div className="col-sm-6 col-lg-5 align-center pt-20 pt-lg-0 mb-xs-30">
										<div className="hs-line-4 font-alt mb-20">Thomas Rhythm</div>
										<h1 className="hs-line-15 font-alt mb-40 mb-xs-20">Freelance Web Designer</h1>
										<div className="section-text white mb-70 mb-xs-40 text-justify">
											<p>
												<span className="dropcap font-alt">M</span>y name is Thomas Rhythm. In&nbsp;maximus ligula lorem semper
												metus pellentesque mattis.Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam.
												Sed id&nbsp;dolor consectetur fermentum nibh volutpat, accumsan purus.
											</p>
											<p>
												Phasellus consectetur vel nunc vitae tempus.
												Maecenas commodo ipsum non est consequat euismod.Aenean sit amet urna ac velit dapibus ullamcorper
												at ac ligula. Duis sed laoreet leo. Morbi ac semper lorem ipsum tortor.
											</p>
											<hr className="white mb-30" />
											<div>
												<h4 className="font-alt mt-0 mb-20">Profile</h4>
												<div>
													<strong>Age:</strong>
													27
												</div>
												<div>
													<strong>Address:</strong>
													245 Quigley Blvd, Ste K
												</div>
												<div>
													<strong>Phone:</strong>
													+11 3 8376 6284
												</div>
												<div>
													<strong>Email:</strong>
													<a href="#">support@bestlooker.pro</a>
												</div>
												<div>
													<strong>Status:</strong>
													Available
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-sm-6 col-lg-offset-1">
										<img src="images/cv-resume/image-1.jpg" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /* End Home Section */ }
				
				{ /* Skills Section */ }
				<section className="page-section" id="skills">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Skills</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text mb-50 mb-xs-30">
									Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
									Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
									consectetur fermentum nibh volutpat, accumsan purus.
								</div>
								
								<div className="row">
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
												Branding, % <span>90</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												Web Design, % <span>80</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
												CSS3, % <span>85</span>
											</div>
										</div>
									</div>
									
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												HTML5, % <span>80</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
												JS/jQuery, % <span>75</span>
											</div>
										</div>
										
										<div className="progress tpl-progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
												Wordpress, % <span>65</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /* End Skills Section */ }
				
				<hr className="mt-0 mb-0 " />
				
				{ /* Expirience Section */ }
				<section className="page-section" id="expirience">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Expirience</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text">
									<div className="row">
										<div className="col-md-2 black">2015&ndash;present</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Senior Vice President, Head of Design</h4>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna dolor, laoreet rhoncus
											volutpat et, iaculis a felis. Ut iaculis, ipsum sed dignissim porta, dolor sapien imperdiet
											libero, vitae convallis dui nulla nec urna. Sed malesuada volutpat tortor vitae ultricies.
										</div>
									</div>
									
									<hr />
									
									<div className="row">
										<div className="col-md-2 black">2013&ndash;2015</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Interactive Creative Director</h4>
											Cras felis nulla, auctor eget eros ac, tristique laoreet mauris. Nulla vel lorem non mauris
											auctor pulvinar in vitae justo. Quisque semper, enim in pharetra eleifend, turpis quam interdum
											ligula, sed sagittis neque arcu in velit. Suspendisse suscipit felis justo, ut laoreet ligula dignissim finibus.
										</div>
									</div>
									
									<hr />
									
									<div className="row">
										<div className="col-md-2 black">2010&ndash;2013</div>
										<div className="col-md-10">
											<h4 className="mt-0 mb-0">Freelance Creative Director and Senior Designer</h4>
											Maecenas augue urna, pellentesque ut varius at, suscipit vitae lectus. Vestibulum ante ipsum primis
											in faucibus orci luctus et ultrices posuere cubilia. Nulla consequat felis at auctor eleifend. Mauris iaculis urna ac dolor ornare lobortis.
											Morbi rutrum ligula vel ipsum accumsan malesuada.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /* End Expirience Section */ }
				
				{ /* Section */ }
				<section className="page-section bg-dark-lighter bg-dark-alfa-70" data-background="images/cv-resume/section-bg-1.jpg">
					<div className="container relative">
						<div className="row alt-features-grid font-alt">
							<div className="col-sm-4 wow fadeInRight" data-wow-delay="0.1s">
								<div className="alt-features-item align-center">
									<div className="alt-features-icon white">
										<span className="icon-telescope"></span>
									</div>
									<h3 className="alt-features-title">Unique Methods</h3>
								</div>
							</div>
							
							<div className="col-sm-4 wow fadeInRight" data-wow-delay="0.2s">
								<div className="alt-features-item align-center">
									<div className="alt-features-icon white">
										<span className="icon-presentation"></span>
									</div>
									<h3 className="alt-features-title">Quality Services</h3>
								</div>
							</div>
							
							<div className="col-sm-4 wow fadeInRight" data-wow-delay="0.3s">
								<div className="alt-features-item align-center">
									<div className="alt-features-icon white">
										<span className="icon-piechart"></span>
									</div>
									<h3 className="alt-features-title">Excellent result</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /* End Section */ }
				
				{ /* Education Section */ }
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
				{ /* End Education Section */ }
				
				<hr className="mt-0 mb-0 "/>
				
				{ /* Portfolio Section */ }
				<section className="page-section" id="portfolio">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Portfolio</h2>
							</div>
							
							<div className="col-sm-9">
								<ul className="works-grid work-grid-3 work-grid-gut clearfix font-alt hover-white hide-titles" id="work-grid">
									<li className="work-item mix design photography">
										<a href="portfolio-single-1.html" className="work-ext-link">
											<div className="work-img">
												<img className="work-img" src="images/portfolio/projects-4.jpg" alt="Work" />
											</div>
											<div className="work-intro">
												<h3 className="work-title">Space</h3>
												<div className="work-descr">
													External Page
												</div>
											</div>
										</a>
									</li>
									
									<li className="work-item mix branding">
										<a href="portfolio-single-1.html" className="work-ext-link">
											<div className="work-img">
												<img className="work-img" src="images/portfolio/projects-6.jpg" alt="Work" />
											</div>
											<div className="work-intro">
												<h3 className="work-title">Boy in T-shirt</h3>
												<div className="work-descr">
													External Page
												</div>
											</div>
										</a>
									</li>
									
									<li className="work-item mix design">
										<a href="portfolio-single-1.html" className="work-ext-link">
											<div className="work-img">
												<img className="work-img" src="images/portfolio/projects-10.jpg" alt="Work" />
											</div>
											<div className="work-intro">
												<h3 className="work-title">Model</h3>
												<div className="work-descr">
													External Page
												</div>
											</div>
										</a>
									</li>
								</ul>
								
								<div className="align-right mt-20">
									<a href="portfolio-boxed-gutter-3col.html" className="btn btn-mod btn-gray btn-small btn-circle">More Works <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /* End Portfolio Section */ }
				
				<hr className="mt-0 mb-0 "/>
				
				{ /* Contact Section */ }
				<section className="page-section" id="contact">
					<div className="container relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Contact</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text mb-70 mb-xs-40">
									Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
								</div>
								
								<div className="row">
									<div className="col-sm-5 mb-sm-60">
										<div className="contact-item mb-30">
											<div className="ci-icon">
												<i className="fa fa-phone"></i>
											</div>
											<div className="ci-title font-alt">
												Phone
											</div>
											<div className="ci-text">
												+11 3 8376 6284
											</div>
										</div>
										
										<hr className="mb-30"/>
										
										<div className="contact-item mb-30">
											<div className="ci-icon">
												<i className="fa fa-map-marker"></i>
											</div>
											<div className="ci-title font-alt">
												Address
											</div>
											<div className="ci-text">
												245 Quigley Blvd, Ste K
											</div>
										</div>
										
										<hr className="mb-30"/>
										
										<div className="contact-item">
											<div className="ci-icon">
												<i className="fa fa-envelope"></i>
											</div>
											<div className="ci-title font-alt">
												Email
											</div>
											<div className="ci-text">
												<a href="mailto:support@bestlooker.pro">support@bestlooker.pro</a>
											</div>
										</div>
										
									</div>
									
									<div className="col-sm-7">
										<form className="form contact-form" id="contact_form">
											<div className="clearfix">
												<div className="form-group">
													<input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" required />
												</div>
												
												<div className="form-group">
													<input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" required />
												</div>
												
												<div className="form-group">
													<textarea name="message" id="message" className="input-md round form-control" style={{ height: '100px' }} placeholder="Message"></textarea>
												</div>
											</div>
											
											<div className="clearfix">
												<div className="cf-left-col">
													<div className="form-tip pt-20">
														<i className="fa fa-info-circle"></i> All the fields are required
													</div>
												</div>
												
												<div className="cf-right-col">
													<div className="align-right pt-10">
														<button className="submit_btn btn btn-mod btn-medium btn-circle" id="submit_btn">Submit</button>
													</div>
												</div>
											</div>
											<div id="result"></div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /* End Contact Section */ }
			</div>
		);
	}
}
