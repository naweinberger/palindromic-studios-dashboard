import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'
import { Card } from 'material-ui/Card'

export class StatItem extends Component {
	render() {
		return (
			<Card style={{margin: 10}}>
                <ListItem
					primaryText={this.props.stat_name}
					secondaryText={this.props.stat_value} />}
				/>
			</Card>
			)
	}
}