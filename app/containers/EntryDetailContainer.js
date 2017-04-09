import React, { Component } from 'react'
import { connect } from 'react-redux'
import EntryDetail from '../components/EntryDetail'
import { fetchEntryIfNeeded, deleteEntry } from '../actions/api'
import _ from 'lodash'

const mapStateToProps = (state) => {
	return {
		entries: state.entries.items,
		loading: state.entries.loadingDetail
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEntryIfNeeded: (id) => {
			dispatch(fetchEntryIfNeeded(id))
		},
		deleteEntry: (id) => {
			dispatch(deleteEntry(id))
		}
	}
}

class EntryDetailContainer extends Component {
	componentDidMount() {
		console.log(this.props.match.params.id)
		const { match } = this.props
		this.props.fetchEntryIfNeeded(match.params.id)
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			const { match } = this.props
			this.props.fetchEntryIfNeeded(match.params.id)
		}
	}

	render() {
		let { loading, match } = this.props
		let entry = _.find(this.props.entries, {id: parseInt(match.params.id)} )
		return (
			<div>
				{loading &&
					<span>Loading...</span>
				}
				{!loading && typeof entry == 'undefined' &&
					<div>Sorry, this entry doesn't exist.</div>
				}
				{!loading && typeof entry != 'undefined' &&
					<div>
						<a onClick={() => this.props.deleteEntry(entry.id)} href='#'>Delete entry</a>
						<EntryDetail entry={entry} />
					</div>
				}
			</div>
			
		)
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetailContainer)