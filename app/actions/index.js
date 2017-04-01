import axios from 'axios'

export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const REQUEST_ENTRY = 'REQUEST_ENTRY'
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY'
export const RECEIVE_ENTRY_NOT_FOUND = 'RECEIVE_ENTRY_NOT_FOUND'

let nextId = 0
export const addEntry = (food, amount) => {
	return {
		type: ADD_ENTRY,
		id: nextId++,
		food,
		amount
	}
}

export const deleteEntry = (id) => {
	return {
		type: DELETE_ENTRY,
		id
	}
}

export const requestEntries = () => {
	return {
		type: REQUEST_ENTRIES
	}
}

export const receiveEntries = (json) => {
	return {
		type: RECEIVE_ENTRIES,
		entries: json.data.results,
		receivedAt: Date.now()
	}
}

export const requestEntry = (id) => {
	return {
		type: REQUEST_ENTRY,
		id
	}
}

export const receiveEntry = (json) => {
	return {
		type: RECEIVE_ENTRY,
		entry: json.data
	}
}

export const receiveEntryNotFound = (json) => {
	return {
		type: RECEIVE_ENTRY_NOT_FOUND
	}
}

// Thunk action creator
// Use it like any other action creator:
// store.dispatch(fetchEntries(params))

export function fetchEntries() {
	return (dispatch) => {
		dispatch(requestEntries)
		return axios.get('http://api.palindromicstudios.com/health/entry/', {
			auth: {
				username: 'natan',
				password: 'phillies'
			}
		})
		.then(
			response => response,
			error => console.log(error)
			)
		.then(json =>
			dispatch(receiveEntries(json))
			)
	}
}

function fetchEntry(id) {
	return (dispatch) => {
		dispatch(requestEntry(id))
		return axios.get(`http://api.palindromicstudios.com/health/entry/${id}/`, {
			auth: {
				username: 'natan',
				password: 'phillies'
			}
		})
		.then(
			function(response) { console.log(response); return response;},
			error => console.log(error)
			)
		.then(json => {
				try {
					let id = json.data.id
					dispatch(receiveEntry(json))
				}
				catch (e) {
					dispatch(receiveEntryNotFound(json))
				}
			}
			
			)
	}
}

function shouldFetchEntry(state, id) {
	const entry = state.entries.items.filter( (entry) => entry.id == id )
	if (entry.length == 0) {
		return true
	}
	return false
}

export function fetchEntryIfNeeded(id) {
	console.log('Calling fetchEntryIfNeeded')
	return (dispatch, getState) => {
		if (shouldFetchEntry(getState(), id)) {
			console.log('Fetching entry...')
			return dispatch(fetchEntry(id))
		}
		console.log('Did not need to fetch entry')
	}
}