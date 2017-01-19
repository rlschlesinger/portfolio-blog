const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const DuplicateResolverPlugin = require('./plugin-duplicate-resolver');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

{
	// runtime loader verification
	require('babel-polyfill');
	require('babel-loader');
	require('style-loader');
	require('css-loader');
	require('postcss-loader');
	require('sass-loader');
	require('sass-resources-loader');
	require('file-loader');
}

function addPolyfill(input) {
	if (typeof input === 'string') {
		return [ 'babel-polyfill', input ];
	}
	
	if (input.constructor === Array) {
		return [ 'babel-polyfill' ].concat(input);
	}
	
	let output = {};
	
	for (let key in input) {
		output[key] = addPolyfill(input[key]);
	}
	
	return output;
}

module.exports = function(dirname, options) {
	options = options || {};
	
	if (typeof options.dev === 'undefined') {
		options.dev = (process.argv[1].indexOf('webpack-dev-server') !== -1 || process.argv.indexOf('--watch') !== -1);
	}
	
	options.title = options.title || 'HMU Design';
	options.resolve_root = options.resolve_root || [];
	options.resolve_alias = options.resolve_alias || {};
	options.externals = options.externals || {};
	
	if (typeof options.minify === 'undefined') {
		options.minify = !options.dev;
	}
	
	options.entry = options.entry || './public-src/bootstrap.js';
	
	if (options.polyfill) {
		options.entry = addPolyfill(options.entry);
	}
	
	try {
		let location = path.join(dirname, 'public-lib');
		let libs = fs.readdirSync(location);
		for (let lib of libs) {
			let location_lib = path.join(location, lib);
			options.resolve_alias[`app-${ lib }`] = location_lib;
		}
	}
	catch (e) {
		// do nothing
	}
	
	let config = {
		target: 'web',
		devtool: options.minify ? 'source-map' : 'inline-source-map',
		stats: {
			colors: true,
		},
	};
	
	/* Input and Output */
	{
		config.entry = options.entry;
		
		config.output = {
			path: path.normalize(path.join(dirname, 'public')),
			filename: '[name].[hash].min.js',
			publicPath: options.dev ? 'http://localhost:8080/' : '/',
		};
		
		config.resolve = {
			extensions: [ '', '.js' ],
			root: options.resolve_root,
			alias: options.resolve_alias,
		};
		
		config.externals = options.externals;
	}
	
	/* Loaders */
	{
		config.module = {
			preLoaders: [],
			loaders: [],
		};
		
		config.module.loaders.push({
			test: /\.(webm|woff|woff2|ttf|eot|jpg|png|gif|svg)?$/,
			loader: 'file-loader',
			query: {
				name: 'assets/[hash].[ext]',
			},
		});
		
		config.module.loaders.push({
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		});
		
		config.module.loaders.push({
			test: /\.css$/,
			exclude: /(node_modules|global)/,
			loaders: options.dev && [           'style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]___[local]', 'postcss-loader?sourceMap' ],
			loader: !options.dev && ExtractTextPlugin.extract([ 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:8]',           'postcss-loader?sourceMap' ]),
		});
		
		config.module.loaders.push({
			test: /(node_modules|global).+\.css$/,
			loaders: options.dev && [           'style-loader', 'css-loader?sourceMap&importLoaders=1', 'postcss-loader?sourceMap' ],
			loader: !options.dev && ExtractTextPlugin.extract([ 'css-loader?sourceMap&importLoaders=1', 'postcss-loader?sourceMap' ]),
		});
		
		config.module.loaders.push({
			test: /\.scss$/,
			exclude: /(node_modules|global)/,
			loaders: options.dev && [           'style-loader', 'css-loader?sourceMap&modules&importLoaders=3&localIdentName=[path]___[name]___[local]', 'postcss-loader?sourceMap', 'sass-loader?sourceMap', 'sass-resources-loader' ],
			loader: !options.dev && ExtractTextPlugin.extract([ 'css-loader?sourceMap&modules&importLoaders=3&localIdentName=[hash:base64:8]',           'postcss-loader?sourceMap', 'sass-loader?sourceMap', 'sass-resources-loader' ]),
		});
		
		config.module.loaders.push({
			test: /(node_modules|global).+\.scss$/,
			loaders: options.dev && [           'style-loader', 'css-loader?sourceMap&importLoaders=2', 'postcss-loader?sourceMap', 'sass-loader?sourceMap' ],
			loader: !options.dev && ExtractTextPlugin.extract([ 'css-loader?sourceMap&importLoaders=2', 'postcss-loader?sourceMap', 'sass-loader?sourceMap' ]),
		});
	}
	
	/* Plugins */
	{
		config.postcss = [
			autoprefixer({ browsers: [ '> 1%', 'last 3 versions' ] }),
		];
		
		config.sassResources = [];
		if (fs.existsSync('./public-src/global/resources.scss')) {
			config.sassResources.push('./public-src/global/resources.scss');
		}
		
		config.plugins = [
			new webpack.ResolverPlugin([ new DuplicateResolverPlugin() ]),
			new webpack.BannerPlugin(`Copyright ${ new Date().getFullYear() } ${ options.title }. All Rights Reserved.`),
			new ExtractTextPlugin('[name].[hash].min.css'),
			new webpack.NoErrorsPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(options.dev ? 'development' : 'production'),
				},
			}),
			new HtmlWebpackPlugin({
				title: options.title,
				filename: 'index.html',
				minify: {
					collapseWhitespace: !options.dev,
				},
				template: path.join(__dirname, 'template.ejs'),
			}),
		];
		
		if (options.minify) {
			config.plugins.push(
				new webpack.optimize.OccurrenceOrderPlugin(),
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false,
					},
				})
			);
		}
	}
	
	return config;
};
