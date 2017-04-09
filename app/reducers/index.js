import { combineReducers } from 'redux'
import entries from './entries'
import foods from './foods'

const healthApp = combineReducers({
	entries,
    foods
})

export default healthApp