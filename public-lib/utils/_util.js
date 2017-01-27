import _ from 'lodash/fp';
import ReactDOM from 'react-dom';

export default class ReactUtil {
	static init(...events) {
		if (this._inited) {
			return false;
		}
		
		this._inited = true;
		this._list = [];
		
		_.map((event) => {
			window.addEventListener(event, () => {
				_.map(instance => instance.update(), this._list);
			});
		}, events);
		
		return true;
	}
	
	constructor() {
		this.constructor.init();
		this.constructor._list.push(this);
		
		this.list = {};
	}
	
	create(name, config, onRegister) {
		name = _.kebabCase(name);
		
		if (this.list[name]) {
			throw new Error(`${ this.constructor.name }: name "${ name }" already exists.`);
		}
		
		this.list[name] = {
			config,
			element: null,
		};
		
		let register = _.camelCase(`register ${ name }`);
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
		return _.map(({ element, config }) => {
			if (!element) {
				return null;
			}
			
			return iterator(element, config);
		}, this.list);
	}
}
