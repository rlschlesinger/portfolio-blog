import styles from './skills.scss';

import React, { Component } from 'react';
import Progress from 'app-components/progress';

export default class Skills extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section>
					<div className="container-fluid">
						<div>
							<div>
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Skills</h2>
							</div>
							
							<div>
								<div className="section-text mb-50 mb-xs-30">
									Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. In&nbsp;maximus ligula semper metus pellentesque mattis.
									Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
									consectetur fermentum nibh volutpat, accumsan purus.
								</div>
								
								<div className="row">
									<div className="col-sm-6 mb-sm-50 mb-xs-30" >
										<Progress label="Content Development" value={ 1 } />
										<Progress label="Front-End Design" value={ 0.95 } />
										<Progress label="Node.JS:" value={ 0.90 } />
									</div>
									
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<Progress label="React.JS:" value={ 0.90 } />
										<Progress label="Inbound Marketing:" value={ 0.60 } />
										<Progress label="Wordpress" value={ 0.90 } />
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
