import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEntry, deleteEntry, fetchEntries, setSelectedEntry } from '../actions'
import { EntryList } from '../components/EntryList'
import _ from 'lodash'

// Perhaps add getEntries = (date/criteria)

const mapStateToProps = (state) => {
	return {
		entries: state.entries.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEntries: () => {
			dispatch(fetchEntries())
		},
		onEntryClick: (entry) => {
			
		}
	}
}

class EntryListContainer extends Component {
	componentDidMount() {
		this.props.fetchEntries();
	}

	componentDidUpdate(lastProps) {

	}

	render() {
		return (
			<EntryList {...this.props} />
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryListContainer)