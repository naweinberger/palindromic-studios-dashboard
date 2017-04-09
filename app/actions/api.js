import {
    submittingEntry,
    submittingEntrySucceeded,
    submittingEntryFailed,
    deletingEntry,
    deletingEntrySucceeded,
    deletingEntryFailed,
    requestEntries,
    receiveEntries,
    requestEntry,
    receiveEntry,
    receiveEntryNotFound,
    requestFoods,
    receiveFoods } from './index'
import axios from 'axios'

export const submitEntry = (date, food, amount) => {
    return (dispatch) => {
        dispatch(submittingEntry)
        axios({
            method: 'post',
            url: 'http://api.palindromicstudios.com/health/entry/',
            auth: {
                username: 'natan',
                password: 'phillies'
            },
            data: {
                date: date,
                food_upload: food,
                amount: amount
            }
            
        })
        .then(
            response => dispatch(submittingEntrySucceeded(response)),
            error => dispatch(submittingEntryFailed(error))
            )
    }
    
}

export const deleteEntry = (id) => {
    return (dispatch) => {
        dispatch(deletingEntry)
        axios({
            method: 'delete',
            url: `http://api.palindromicstudios.com/health/entry/${id}/`,
            auth: {
                username: 'natan',
                password: 'phillies'
            }
        })
        .then(
            response => dispatch(deletingEntrySucceeded(id)),
            error => dispatch(deletingEntryFailed())
            )
    }
}

// Thunk action creator
// Use it like any other action creator:
// store.dispatch(fetchEntries(params))


// Fetch all entries from main entry endpoint
export function fetchEntries() {
    return (dispatch) => {
        dispatch(requestEntries)
        return axios.get('http://api.palindromicstudios.com/health/entry/today/', {
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

// Fetch a single entry at its detail endpoint
export function fetchEntry(id) {
    return (dispatch) => {
        dispatch(requestEntry(id))
        return axios.get(`http://api.palindromicstudios.com/health/entry/${id}/`, {
            auth: {
                username: 'natan',
                password: 'phillies'
            }
        })
        .then(
            response => { 
                if (response.status == 200) {
                    dispatch(receiveEntry(response))
                }
            },
            error => {
                console.log(error.response.status)
                if (error.response.status === 404) {
                    dispatch(receiveEntryNotFound())
                }
            }
            )
    }
}

export function fetchFoods() {
    return (dispatch) => {
        dispatch(requestFoods())
        return axios.get(`http://api.palindromicstudios.com/health/food/`, {
            auth: {
                username: 'natan',
                password: 'phillies'
            }
        })
        .then(
            response => {
                if (response.status == 200) {
                    dispatch(receiveFoods(response))
                }
                else {
                    console.log(response)
                }
            },
            error => console.log(error)
            )
    }
}



// Logical tests

// Determines if an entry already exists in the store
// If not, indicate that it should be fetched
function shouldFetchEntry(state, id) {
    const entry = state.entries.items.filter( (entry) => entry.id == id )
    if (entry.length == 0) {
        return true
    }
    return false
}

// Fetches an entry from its detail endpoint if `shouldFetchEntry()` returns true
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