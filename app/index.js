import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import healthApp from './reducers'
import EntryContainer from './containers/EntryContainer'
import { addEntry, deleteEntry } from './actions'

let store = createStore(healthApp)

let unsubscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<div>
			<EntryContainer />
			<button onClick={() => store.dispatch(addEntry({name: 'Chili', unit: 'g'}, 220))}>Add entry</button>
		</div>
	</Provider>,
	document.getElementById('app')
	);