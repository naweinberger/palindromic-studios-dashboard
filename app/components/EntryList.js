import React from 'react';
import { Entry } from './Entry'

export class EntryList extends React.Component {
	onEntryClick(id) {
		return this.props.onEntryClick(id)
	}
	render() {
		let onEntryClick = this.props.onEntryClick
		let entries = this.props.entries.map(function(entry) {
			return(
			<Entry
				key={entry.id}
				food={entry.food}
				amount={entry.amount}
				onEntryClick={() => onEntryClick(entry.id)}
			/>)
			}
		);
		return (
			<div>
				<ul>
					{entries}
				</ul>
			</div>
			)
	}
}

EntryList.propTypes = {
	entries: React.PropTypes.array,
	onEntryClick: React.PropTypes.func
}