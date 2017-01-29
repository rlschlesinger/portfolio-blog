import ReactUtil from './_util.js';

export default class ScrollCheck extends ReactUtil {
	static init() {
		super.init('scroll', 'resize');
	}
	
	create(name, config) {
		return super.create(name, config, (element, config) => {
			if (typeof config.create === 'function') {
				config.create(element);
			}
			
			if (!element) {
				return;
			}
			
			element.classList.add('animated');
			
			if (isVisible(element)) {
				this.doShow(element, config);
				config._state = 'visible';
			}
			
			else if (!isVisible(element)) {
				this.doHide(element, config);
				config._state = 'hidden';
			}
		});
	}
	
	update() {
		return super.update((element, config) => {
			let state = config._state;
			
			if (state === 'hidden' && isVisible(element)) {
				this.doShow(element, config);
				config._state = 'visible';
			}
			
			else if (state === 'visible' && !isVisible(element)) {
				this.doHide(element, config);
				config._state = 'hidden';
			}
		});
	}
	
	doShow(element, config, force = false) {
		if ((config.delayShow || config.delay) && !force) {
			setTimeout(() => this.doShow(element, config, true), config.delayShow || config.delay);
			return;
		}
		
		if (typeof config.classHide === 'string') {
			element.classList.remove(config.classHide);
		}
		
		if (typeof config.classShow === 'string') {
			element.classList.add(config.classShow);
		}
	}
	
	doHide(element, config, force = false) {
		if ((config.delayHide || config.delay) && !force) {
			setTimeout(() => this.doHide(element, config, true), config.delayHide || config.delay);
			return;
		}
		
		if (typeof config.classShow === 'string') {
			element.classList.remove(config.classShow);
		}
		
		if (typeof config.classHide === 'string') {
			element.classList.add(config.classHide);
		}
	}
}

function isVisible(element) {
	let top = -window.scrollY;
	let bottom = top + element.offsetHeight;
	
	while (element) {
		top += element.offsetTop;
		bottom += element.offsetTop;
		
		element = element.offsetParent;
	}
	
	return top < window.innerHeight && bottom > 0;
}
