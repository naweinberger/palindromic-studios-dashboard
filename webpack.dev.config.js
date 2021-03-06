var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'app/index.html'),
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./app/index.js'
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.resolve(__dirname, 'app'), loader: 'babel-loader'},
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist'
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}