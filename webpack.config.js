var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.dev.js');
var webpack = require('webpack')

var stripLoader = {
	test: [/\.js$/],
	exclude: /node_modules/,
	loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);
devConfig.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		'NODE_ENV': JSON.stringify('production')
	}
}))
devConfig.devtool = 'source-map'
module.exports = devConfig