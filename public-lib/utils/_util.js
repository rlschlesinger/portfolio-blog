import ReactDOM from 'react-dom';

export default class ReactUtil {
	static init(...events) {
		if (this._inited) {
			return false;
		}
		
		this._inited = true;
		this._list = [];
		
		events.map((event) => {
			window.addEventListener(event, () => {
				this._list.map(instance => instance.update());
			});
		});
		
		return true;
	}
	
	constructor() {
		this.constructor.init();
		this.constructor._list.push(this);
		
		this.list = {};
	}
	
	create(name, config, onRegister) {
		if (this.list[name]) {
			throw new Error(`${ this.constructor.name }: name "${ name }" already exists.`);
		}
		
		this.list[name] = {
			config,
			element: null,
		};
		
		let register = `register${ name }`;
		this[register] = (element) => {
			if (!(element instanceof HTMLElement)) {
				element = ReactDOM.findDOMNode(element);
			}
			
			this.list[name].element = element;
			
			if (typeof onRegister === 'function') {
				onRegister(element, config);
			}
		};
		
		return this[register];
	}
	
	update(iterator) {
		return Object.keys(this.list).map((name) => {
			let { element, config } = this.list[name];
			
			if (!element) {
				return null;
			}
			
			return iterator(element, config);
		});
	}
}
