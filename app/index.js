import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import healthApp from './reducers'
import EntryContainer from './containers/EntryContainer'
import { addEntry, deleteEntry, getEntries } from './actions'

let store = createStore(healthApp)

const _deleteEntry = (id) => {
	console.log('Delete id ' + id)
	store.dispatch(deleteEntry(id))
}

// store.dispatch(addEntry({name: 'Chili', unit: 'g'}, 200))
// store.dispatch(addEntry({name: 'Yogurt', unit: 'g'}, 125))
// store.dispatch(addEntry({name: 'Peanuts', unit: 'g'}, 30))
let unsubscribe = store.subscribe(() => console.log(store.getState().entries))

ReactDOM.render(
	<Provider store={store}>
		<EntryContainer />
	</Provider>,
	document.getElementById('app')
	);