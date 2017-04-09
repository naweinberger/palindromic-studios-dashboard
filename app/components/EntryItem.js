import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'
import { Card } from 'material-ui/Card'
import ActionDelete from 'material-ui/svg-icons/action/delete'

export class EntryItem extends React.Component {
	render() {
		let entry = this.props.entry
		return (
			<Card style={{
		      margin: 10
		    }}>
				<ListItem
					primaryText={entry.food.name}
					secondaryText={`${Math.round(entry.calories)} cal`}
					containerElement={<Link to={`/entry/${entry.id}`} /> }
				/>
			</Card>
			)
	}
}

// Add PropTypes