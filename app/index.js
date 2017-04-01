import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import healthApp from './reducers'
import EntryListContainer from './containers/EntryListContainer'
import EntryDetailContainer from './containers/EntryDetailContainer'
import { addEntry, deleteEntry } from './actions'

let store = createStore(
	healthApp,
	applyMiddleware(
		logger,
		thunkMiddleware
		)
	)

let unsubscribe = store.subscribe(() => console.log(store.getState()))

const routes = [
	{path: '/', text: 'Home', showIndex: true, exact: true,  main: EntryListContainer},
	{path: '/entry/:id', showIndex: false, main: EntryDetailContainer}
]


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{routes.filter( (route) => route.showIndex == true ).map( (route, index) => <li key={index}><Link to={route.path}>{route.text}</Link></li>)}
					<div>
						{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.main} />)}
					</div>
					
					{/* Ex: sidebar, main
					<div>
						{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.div2} />)}
					</div>
					*/}

				</div>
			</Router>
			)
	}
}



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

