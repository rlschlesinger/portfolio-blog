import styles from './skills.scss';

import React, { Component } from 'react';
import Progress from 'app-components/progress';

export default class Skills extends Component {
	render() {
		return (
			<div className={ styles.main }>
				<section className="page-section" id="skills">
					<div className="container-fluid relative">
						<div className="row">
							<div className="col-sm-3">
								<h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">Skills</h2>
							</div>
							
							<div className="col-sm-9">
								<div className="section-text mb-50 mb-xs-30">
									I&rsquo;m as comfortable writing WordPress plugins and technical documents as I am writing RFPs and marketing plans.
								</div>
								
								<div className="row">
									<div className="col-sm-6 mb-sm-50 mb-xs-30" >
										<Progress label="Content Development:" value={ 1 } />
										<Progress label="Inbound Marketing:" value={ 0.95 } />
										<Progress label="Grant Writing:" value={ 0.90 } />
										<Progress label="Adobe Creative Suite:" value={ 0.90 } />
									</div>
									
									<div className="col-sm-6 mb-sm-50 mb-xs-30">
										<Progress label="Front-End Design:" value={ 0.95 } />
										<Progress label="Node.JS:" value={ 0.85 } />
										<Progress label="React.JS:" value={ 0.85 } />
										<Progress label="WordPress:" value={ 0.80 } />
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
