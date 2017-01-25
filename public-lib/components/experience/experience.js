import styles from './experience.scss';

import React, { Component } from 'react';

export default class Experience extends Component {
	render() {
		return (
			<div className={ styles.main }>
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
			</div>
		);
	}
}
