import React from 'react';
import { Link } from 'react-router-dom'

export class EntryItem extends React.Component {
	render() {
		let entry = this.props.entry
		return (
			<Link to={`/entry/${entry.id}`}>
				<li onClick={this.props.onEntryClick}>
					<h3>{entry.food.name}</h3>
					<h4>{entry.amount} {entry.food.unit}</h4>
					<h4>{entry.calories}</h4>
				</li>
			</Link>
			)
	}
}

// Add PropTypes