import React, { Component } from 'react';
import { EntryItem } from './EntryItem'

export class EntryList extends Component {
	onEntryClick(id) {
		return this.props.onEntryClick(id)
	}
	render() {
		let onEntryClick = this.props.onEntryClick
		let entries = this.props.entries.map(function(entry) {
			return(
			<EntryItem
				key={entry.id}
				entry={entry}
				onEntryClick={() => onEntryClick(entry)}
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