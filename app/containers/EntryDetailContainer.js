import React, { Component } from 'react'
import { connect } from 'react-redux'
import EntryDetail from '../components/EntryDetail'
import { fetchEntryIfNeeded } from '../actions'
import _ from 'lodash'

const mapStateToProps = (state) => {
	return {
		entries: state.entries.items,
		loading: state.entries.loadingDetail
	}
}

class EntryDetailContainer extends Component {
	componentDidMount() {
		const { dispatch, match } = this.props
		dispatch(fetchEntryIfNeeded(match.params.id))
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			const { dispatch, match } = this.props
			dispatch(fetchEntryIfNeeded(match.params.id))
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
						<EntryDetail entry={entry} />
					</div>
				}
			</div>
			
		)
		
	}
}

export default connect(mapStateToProps)(EntryDetailContainer)