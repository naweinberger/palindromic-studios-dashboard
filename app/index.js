import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import healthApp from './reducers'
import EntryContainer from './containers/EntryContainer'
import { addEntry, deleteEntry } from './actions'

let store = createStore(
	healthApp,
	applyMiddleware(logger)
	)

let unsubscribe = store.subscribe(() => console.log(store.getState()))

const Test = () => <h1>Test</h1>

const routes = [
	{path: '/', text: 'Home', exact: true,  div1: EntryContainer, div2: Test},
	{path: '/b', text: 'B', div1: Test, div2: EntryContainer}
]


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{routes.map( (route, index) => <li key={index}><Link to={route.path}>{route.text}</Link></li>)}
					<div>
						{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.div1} />)}
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
		<EntryContainer />
	</Provider>,
	document.getElementById('app')
);

