import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { BrowserRouter as Router, Route, Match, Link } from 'react-router-dom'
import healthApp from './reducers'
import Header from './components/Header'
import DashboardContainer from './containers/DashboardContainer'
import EntryDetailContainer from './containers/EntryDetailContainer'
import EntryInputContainer from './containers/EntryInputContainer'
import { addEntry, deleteEntry } from './actions'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

let store = createStore(
	healthApp,
	applyMiddleware(
		// logger,
		thunkMiddleware
		)
	)

// let unsubscribe = store.subscribe(() => console.log(store.getState()))

const routes = [
	{path: '/', text: 'Home', showIndex: true, exact: true,  main: DashboardContainer, header: () => <Header links={routes} current="Home"/>},
	{path: '/a', text: 'Somewhere else', showIndex: true, exact: true,  main: DashboardContainer, header: () => <Header links={routes} current="Somewhere else" />},
	{path: '/entry/:id', showIndex: false, main: EntryDetailContainer}
]

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Router>
					<div>
						{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.header} />)}
						<div>
							{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.main} />)}
						</div>
						
						{/*<div>
							{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />)}
						</div>
						
						{/* Ex: sidebar, main
						<div>
							{routes.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.div2} />)}
						</div>
						*/}

					</div>
				</Router>
			</MuiThemeProvider>
			)
	}
}



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

