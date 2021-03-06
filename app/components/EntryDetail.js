import React, { Component } from 'react';
import { deleteEntry } from '../actions/api'

class EntryDetail extends Component {

	render() {
		const { entry } = this.props
		return (
			<div>
				<h1>{entry.id}</h1>
				<p>
					{entry.food.name}: {entry.amount} {entry.food.unit}
				</p>
			</div>
		)
		
	}
}

export default EntryDetail