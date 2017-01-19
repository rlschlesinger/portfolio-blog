const path = require('path');

function DuplicateResolver() {
	
}

module.exports = DuplicateResolver;

DuplicateResolver.prototype.apply = function(resolver) {
	resolver.plugin('directory', function(request, callback) {
		let fs = this.fileSystem;
		let location = this.join(request.path, request.request);
		
		if (request.path.indexOf('node_modules') !== -1) {
			callback.log(`${ location } is in node_modules`);
			
			return callback();
		}
		
		return fs.stat(location, (err, stat) => {
			if (err || !stat) {
				callback.log(`${ location } doesn't exist`);
				
				return callback();
			}
			
			if (!stat.isDirectory()) {
				callback.log(`${ location } is not a directory`);
				
				return callback();
			}
			
			return this.doResolve('file', {
				path: location,
				request: path.basename(location),
				query: request.query,
			}, callback);
		});
	});
};
