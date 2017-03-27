export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'

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