import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

export class EntryItem extends React.Component {
	render() {
		let entry = this.props.entry
		return (
			<Link to={`/entry/${entry.id}`}>
				<ListItem
					primaryText={entry.food.name}
					secondaryText={`${entry.calories} cal`}>
				</ListItem>
			</Link>
			)
	}
}

// Add PropTypes