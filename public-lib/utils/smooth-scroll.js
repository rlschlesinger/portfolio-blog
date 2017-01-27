/* eslint-disable no-console */

let extract = /^#(.+)$/;

let inited = false;
let init = () => {
	if (inited) {
		console.warn('SmoothScroll: already inited');
		return;
	}
	
	inited = true;
	
	window.addEventListener('click', (event) => {
		let target = event.target.tagName === 'A';
		target = target && extract.exec(event.target.getAttribute('href'));
		target = target && target[1];
		target = target && document.getElementById(target);
		
		if (!target) {
			return;
		}
		
		scrollTo(target);
		
		event.preventDefault();
	}, false);
};

let scrollTo = (scrollEnd, duration = 0, ease = easeInOutCubic) => {
	let scrollStart = window.scrollY;
	
	if (scrollEnd instanceof HTMLElement) {
		scrollEnd = getPosition(scrollEnd);
	}
	
	if (!duration || typeof duration !== 'number') {
		duration = Math.abs(scrollEnd - scrollStart) / 5;
	}
	
	let start = null;
	let step = (time) => {
		if (!start) {
			start = time;
		}
		
		let elapsed = time - start;
		let current = scrollStart + (scrollEnd - scrollStart) * ease(elapsed / duration);
		
		if (elapsed > duration) {
			window.scroll(0, scrollEnd);
			return;
		}
		
		window.scroll(0, current);
		
		requestAnimationFrame(step);
	};
	
	requestAnimationFrame(step);
};

export default {
	init,
	scrollTo,
};

function getPosition(element) {
	return element.getBoundingClientRect().top + window.scrollY;
}

function easeInOutCubic(t) {
	return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
