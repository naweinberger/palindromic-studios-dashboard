const path = require('path')
const express = require('express')

const appConfig = function () {
	const app = express()
	const indexPath = path.join(__dirname, 'dist/index.html')
	const publicPath = express.static(path.join(__dirname, 'dist'))

	app.use('/dist', publicPath)
	app.get('/*', function (_, res) { res.sendFile(indexPath) })

	return app
}

const port = (process.env.PORT || 8080)
const app = appConfig()

app.listen(port)
console.log(`Listening at http://localhost:${port}`)