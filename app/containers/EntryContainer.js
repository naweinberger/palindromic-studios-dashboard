import React, { Component } from 'react'
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

class EntryContainer extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<EntryList {...this.props} />
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryContainer)