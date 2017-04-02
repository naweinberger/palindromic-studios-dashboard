const path = require('path')
const express = require('express')



const appConfig = function () {
	const app = express()
	const indexPath = path.join(__dirname, 'dist/index.html')
	const publicPath = express.static(path.join(__dirname, 'dist'))

	if (process.env.NODE_ENV !== 'production') {
		console.log('Running in dev environment')

		var webpack = require('webpack');
		var config = require('./webpack.dev.config')
		var compiler = webpack(config);
		
		app.use(require('webpack-dev-middleware')(compiler, {
		  noInfo: true,
		  publicPath: config.output.publicPath
		}));

		app.use(require('webpack-hot-middleware')(compiler, {
		  log: console.log,
		  path: '/__webpack_hmr',
		  heartbeat: 10 * 1000
		}));
	}
	

	app.use('/dist', publicPath)
	app.get('/*', function (_, res) { res.sendFile(indexPath) })

	return app
}

const port = (process.env.PORT || 8080)
const app = appConfig()

app.listen(port)
console.log(`Listening at http://localhost:${port}`)