import GA from 'app-utils/ga';

import React, { Component } from 'react';
import { Match, Miss, Redirect } from 'react-router';
import Layout from './layout';

import Error404 from './routes/error404';
import Home from './routes/home';
import About from './routes/about';
import Blog from './routes/blog';
import Contact from './routes/contact';
import Portfolio from './routes/portfolio';
import Resume from './routes/resume';

export default class App extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired,
		history: React.PropTypes.object.isRequired,
	};
	
	componentWillMount() {
		GA.register(this.context.history);
	}
	
	componentWillUpdate() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<Layout>
				<Match pattern="/" component={ () => <Redirect to="/home" /> } exactly />
				<Match pattern="/home" component={ Home } />
				<Match pattern="/about" component={ About } />
				<Match pattern="/blog/:key?" component={ Blog } />
				<Match pattern="/contact" component={ Contact } />
				<Match pattern="/portfolio" component={ Portfolio } />
				<Match pattern="/resume" component={ Resume } />
				<Miss component={ Error404 } />
			</Layout>
		);
	}
}
