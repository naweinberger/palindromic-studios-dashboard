import { 
	SUBMITTING_ENTRY,
	SUBMITTING_ENTRY_SUCCEEDED,
	SUBMITTING_ENTRY_FAILED,
	DELETING_ENTRY,
	DELETING_ENTRY_SUCCEEDED,
	DELETING_ENTRY_FAILED,
	UPDATE_ENTRY,
	REQUEST_ENTRIES,
	RECEIVE_ENTRIES,
	REQUEST_ENTRY,
	RECEIVE_ENTRY,
	RECEIVE_ENTRY_NOT_FOUND } from '../actions'

const initialState = {
	isSubmitting: false,
	isDeleting: false,
	isFetching: false,
	didInvalidate: false,
	items: [],
	stats: {},
	loadingDetail: false,
	errorSubmitting: false,
	errorDeleting: false
}

// Entry list view cases
const entryList = (state = initialState, action) => {
	switch (action.type) {
		case SUBMITTING_ENTRY:
			return Object.assign({}, state, {
				isSubmitting: true,
				errorSubmitting: false
			})
		case SUBMITTING_ENTRY_SUCCEEDED:
			return Object.assign({}, state, {
				isSubmitting: false,
				errorSubmitting: false,
				items: [...state.items, action.entry]
			})
		case SUBMITTING_ENTRY_FAILED:
			return Object.assign({}, state, {
				isSubmitting: false,
				errorSubmitting: true
			})
		case DELETING_ENTRY:
			return Object.assign({}, state, {
				isDeleting: true,
				errorDeleting: false
			})
		case DELETING_ENTRY_SUCCEEDED:
			return Object.assign({}, state, {
				isDeleting: false,
				items: state.items.filter((entry) => entry.id !== action.id)
			})
		case DELETING_ENTRY_FAILED:
			return Object.assign({}, state, {
				isDeleting: false,
				errorDeleting: true
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
		case SUBMITTING_ENTRY:
		case SUBMITTING_ENTRY_SUCCEEDED:
		case SUBMITTING_ENTRY_FAILED:
		case DELETING_ENTRY:
		case DELETING_ENTRY_SUCCEEDED:
		case DELETING_ENTRY_FAILED:
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