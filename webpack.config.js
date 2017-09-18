/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugins = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		main: [
			'./app/app.js',
			'webpack-dev-server/client?http://localhost:8094',
			'webpack/hot/only-dev-server'
		]
	},
	output: {
		publicPath: 'http://localhost:8094/',
		filename: './dist/js/bundle.js'
		/*path      : path.resolve(__dirname, 'dist'),
		publicPath: "./dist/js/",
		filename  : "bundles.js"*/
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?' + JSON.stringify({ presets: ['react', 'es2015'] })]
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	},
	plugins: [
		new ExtractTextPlugins('./dist/style/main.css', {
			allChunks: true
		})
	],
	resolve: {
		extension: ['', '.js', '.es6']
	},
	devServer: {
		inline: true
		/*host: '0.0.0.0',
		 proxy: [{
		 //path: '/admin/!*',
		 // target: 'http://10.2.82.209:8899' //开发1
		 }]*/
	}
};
