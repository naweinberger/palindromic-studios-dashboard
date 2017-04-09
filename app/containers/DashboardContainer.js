import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions'
import { fetchEntries, fetchFoods, submitEntry } from '../actions/api'
import { EntryList } from '../components/EntryList'
import { StatsList } from '../components/StatsList'
import { EntryInput } from '../components/EntryInput'
import _ from 'lodash'

// Perhaps add getEntries = (date/criteria)

const mapStateToProps = (state) => {
	return {
		entries: state.entries.items,
		stats: state.entries.stats,
		foods: state.foods.items,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEntries: () => {
			dispatch(fetchEntries())
		},
		fetchFoods: () => {
			dispatch(fetchFoods())
		},
		onEntryClick: (entry) => {
			
		},
		submitEntry: (date, food, amount) => {
			dispatch(submitEntry(date, food, amount))
		}
	}
}

class DashboardContainer extends Component {
	componentDidMount() {
		this.props.fetchEntries();
		this.props.fetchFoods();
	}

	componentDidUpdate(lastProps) {

	}

	render() {
		return (
			<div>
				<div style={{display: 'block', textAlign: 'center'}}>
					<EntryInput foods={this.props.foods} submitEntry={this.props.submitEntry} />
				</div>
				<div style={{width: '40%', display: 'inline-block'}}>
					<EntryList entries={this.props.entries} />
				</div>
				<div style={{width: '30%', verticalAlign: 'top', display: 'inline-block', textAlign: 'right', right: 0, position: 'absolute'}}>
					<StatsList stats={this.props.stats} />
				</div>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)