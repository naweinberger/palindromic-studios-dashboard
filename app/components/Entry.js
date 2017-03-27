import React from 'react';

export class Entry extends React.Component {
	render() {
		return (
			<li onClick={this.props.onEntryClick}>
				<h3>{this.props.food.name}</h3>
				<h4>{this.props.amount} {this.props.food.unit}</h4>
				<h4>{this.props.calories}</h4>
			</li>
			)
	}
}