import ReactUtil from './_util.js';

export default class Parallax extends ReactUtil {
	static init() {
		super.init('scroll');
	}
	
	update() {
		return super.update((element, speed) => {
			let position = element.getBoundingClientRect().top * speed;
			
			element.style.backgroundPositionY = `${ position }px`;
		});
	}
}
