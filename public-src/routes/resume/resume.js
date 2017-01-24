import styles from './resume.scss';

import React, { Component } from 'react';
import Biography from 'app-components/biography';
import ContactForm from 'app-components/contactForm';
import Education from 'app-components/education';
import Experience from 'app-components/experience';
import Icons from 'app-components/icons';
import Skills from 'app-components/skills';

export default class Resume extends Component {
	render() {
		return (
			<div className={ styles.main }>
				{ /* Home Section */ }
				<Biography />
				{ /* End Home Section */ }
				
				{ /* Skills Section */ }
				<Skills />
				{ /* End Skills Section */ }
				
				<hr className="mt-0 mb-0 " />
				
				{ /* Expirience Section */ }
				<Experience />
				{ /* End Expirience Section */ }
				
				{ /* Section */ }
				<Icons />
				{ /* End Section */ }
				
				{ /* Education Section */ }
				<Education />
				{ /* End Education Section */ }
				
				<hr className="mt-0 mb-0 "/>
				
				{ /* Contact Section */ }
				<ContactForm />
				{ /* End Contact Section */ }
			</div>
		);
	}
}
