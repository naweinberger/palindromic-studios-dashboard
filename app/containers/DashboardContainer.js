import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEntry, deleteEntry } from '../actions'
import { fetchEntries } from '../actions/api'
import { EntryList } from '../components/EntryList'
import { StatsList } from '../components/StatsList'
import _ from 'lodash'

// Perhaps add getEntries = (date/criteria)

const mapStateToProps = (state) => {
	return {
		entries: state.entries.items,
		stats: state.entries.stats
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

class DashboardContainer extends Component {
	componentDidMount() {
		this.props.fetchEntries();
	}

	componentDidUpdate(lastProps) {

	}

	render() {
		return (
			<div>
				<EntryList entries={this.props.entries} />
				<StatsList stats={this.props.stats} />
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)