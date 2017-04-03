import { fetchEntries, fetchEntry, requestAddEntry } from './api'

export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const REQUEST_ENTRY = 'REQUEST_ENTRY'
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY'
export const RECEIVE_ENTRY_NOT_FOUND = 'RECEIVE_ENTRY_NOT_FOUND'

let nextId = 0


export const addEntry = (food, amount, date) => {
	return {
		type: ADD_ENTRY,
		id: nextId++,
		food,
		amount,
		date
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

