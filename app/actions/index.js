export const SUBMITTING_ENTRY = 'SUBMITTING_ENTRY'
export const SUBMITTING_ENTRY_SUCCEEDED = 'SUBMITTING_ENTRY_SUCCEEDED'
export const SUBMITTING_ENTRY_FAILED = 'SUBMITTING_ENTRY_FAILED'
export const DELETING_ENTRY = 'DELETING_ENTRY'
export const DELETING_ENTRY_SUCCEEDED = 'DELETING_ENTRY_SUCCEEDED'
export const DELETING_ENTRY_FAILED = 'DELETING_ENTRY_FAILED'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const REQUEST_ENTRY = 'REQUEST_ENTRY'
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY'
export const RECEIVE_ENTRY_NOT_FOUND = 'RECEIVE_ENTRY_NOT_FOUND'

export const submittingEntry = (date, food, amount) => {
	return {
		type: SUBMITTING_ENTRY,
		food,
		amount,
		date
	}
}

export const submittingEntrySucceeded = (json) => {
	return {
		type: SUBMITTING_ENTRY_SUCCEEDED,
		entry: json.data
	}
}

export const submittingEntryFailed = (error) => {
	return {
		type: SUBMITTING_ENTRY_FAILED,
		message: 'An error occurred.'
	}
}

export const deletingEntry = (id) => {
	return {
		type: DELETING_ENTRY,
		id
	}
}

export const deletingEntrySucceeded = (id) => {
	return {
		type: DELETING_ENTRY_SUCCEEDED,
		id
	}
}

export const deletingEntryFailed = () => {
	return {
		type: DELETING_ENTRY_FAILED,
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
		entries: json.data.entries,
		stats: json.data.totals,
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

export const receiveEntryNotFound = () => {
	return {
		type: RECEIVE_ENTRY_NOT_FOUND
	}
}

export const REQUEST_FOODS = 'REQUEST_FOODS'
export const requestFoods = () => {
	return {
		type: REQUEST_FOODS
	}
}

export const RECEIVE_FOODS = 'RECEIVE_FOODS'
export const receiveFoods = (json) => {
	return {
		type: RECEIVE_FOODS,
		foods: json.data.results
	}
}

