import { 
	ADD_ENTRY,
	DELETE_ENTRY,
	UPDATE_ENTRY,
	REQUEST_ENTRIES,
	RECEIVE_ENTRIES,
	REQUEST_ENTRY,
	RECEIVE_ENTRY,
	RECEIVE_ENTRY_NOT_FOUND } from '../actions'

const initialState = {
	isFetching: false,
	didInvalidate: false,
	items: [],
	stats: {},
	loadingDetail: false
}

// Entry list view cases
const entryList = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ENTRY:
			return Object.assign({}, state, {
				items: [...state.items, {id: action.id, food: action.food, amount: action.amount, date: action.date}]
			})
		case DELETE_ENTRY:
			return Object.assign({}, state, {
				items: state.items.filter((entry) => entry.id !== action.id)
			})
		case REQUEST_ENTRIES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_ENTRIES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.entries,
				stats: action.stats,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

// Entry detail view cases
const entryDetail = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_ENTRY:
			return Object.assign({}, state, {
				loadingDetail: true
			})
		case RECEIVE_ENTRY:
			return Object.assign({}, state, {
				loadingDetail: false,
				items: [...state.items, action.entry]
			})
		case RECEIVE_ENTRY_NOT_FOUND:
			return Object.assign({}, state, {
				loadingDetail: false
			})
		default:
			return state
	}
}

const entries = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ENTRY:
		case DELETE_ENTRY:
		case REQUEST_ENTRIES:
		case RECEIVE_ENTRIES:
			return entryList(state, action)
		case REQUEST_ENTRY:
		case RECEIVE_ENTRY:
		case RECEIVE_ENTRY_NOT_FOUND:
			return entryDetail(state, action)
		default:
			return state
	}
}

export default entries