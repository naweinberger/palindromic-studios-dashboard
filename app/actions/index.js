import axios from 'axios'

export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES'

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

// Thunk action creator
// Use it like any other action creator:
// store.dispatch(fetchEntries(params))

export function fetchEntries() {
	return function (dispatch) {
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