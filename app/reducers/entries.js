import { ADD_ENTRY, DELETE_ENTRY, UPDATE_ENTRY, GET_ENTRIES } from '../actions'

const initialState = [
		{id: 1, food: {name: 'Chili', unit: 'g'}, amount: 200},
		{id: 2, food: {name: 'Yogurt', unit: 'g'}, amount: 150},
		{id: 3, food: {name: 'Peanuts', unit: 'g'}, amount: 30}
	]

const entries = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ENTRY:
			return {...state, entries: [...state.entries, {food: action.food, amount: action.amount}]}
		case DELETE_ENTRY:
			return state.filter((entry) => entry.id !== action.id)
		case GET_ENTRIES:
			return state
		default:
			return state
	}
}

export default entries