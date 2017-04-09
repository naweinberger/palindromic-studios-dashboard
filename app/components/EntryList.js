import React, { Component } from 'react';
import { EntryItem } from './EntryItem'
import { List } from 'material-ui/List'

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
			/>)
			}
		);
		return (
			<div>
				<List>
					{entries}
				</List>
			</div>
			)
	}
}

EntryList.propTypes = {
	entries: React.PropTypes.array,
	onEntryClick: React.PropTypes.func
}