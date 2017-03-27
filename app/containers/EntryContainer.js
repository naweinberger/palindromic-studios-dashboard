import { connect } from 'react-redux'
import { addEntry, deleteEntry } from '../actions'
import { EntryList } from '../components/EntryList'

// Perhaps add getEntries = (date/criteria)

const mapStateToProps = (state) => {
	return {
		entries: state.entries
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEntryClick: (id) => {
			dispatch(deleteEntry(id))
		}
	}
}

const EntryContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(EntryList)

export default EntryContainer