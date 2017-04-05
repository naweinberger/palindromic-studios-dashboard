import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

export class EntryItem extends React.Component {
	render() {
		let entry = this.props.entry
		return (
			<ListItem
				primaryText={entry.food.name}
				secondaryText={`${Math.round(entry.calories)} cal`}
				containerElement={<Link to={`/entry/${entry.id}`} />} />
			)
	}
}

// Add PropTypes