import {
    REQUEST_FOODS,
    RECEIVE_FOODS } from '../actions'

const initialState = {
    isFetching: false,
    items: []
}

// Foods list view cases
const foodsList = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FOODS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_FOODS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.foods
            })
    }
}


const foods = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FOODS:
        case RECEIVE_FOODS:
            return foodsList(state, action)
        default:
            return state
    }
}

export default foods