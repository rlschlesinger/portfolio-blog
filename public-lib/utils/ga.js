import ReactGA from 'react-ga';

const APPID = '';

export default {
	init() {
		ReactGA.initialize(APPID);
	},
	
	register(history) {
		history.listen(() => this.navigate());
	},
	
	navigate() {
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
	},
	
	event(args) {
		ReactGA.event(args);
	},
	
	getClientId() {
		return new Promise((resolve) => {
			ReactGA.ga((tracker) => resolve(tracker.get('clientId')));
		});
	},
};
