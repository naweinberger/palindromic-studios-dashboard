export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const GET_ENTRIES = 'GET_ENTRIES'

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

export const getEntries = () => {
	return {
		type: GET_ENTRIES
	}
}