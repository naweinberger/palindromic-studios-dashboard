import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List'
import { StatItem } from './StatItem'

export class StatsList extends Component {
    render() {
    	let stats = {
    		calories: 'Calories',
    		carbohydrates: 'Carbohydrates',
    		protein: 'Protein',
    		fat: 'Fat',
    		unsaturated_fat: 'Unsaturated fat',
    		saturated_fat: 'Saturated fat',
    		sugar: 'Sugar',
    		fiber: 'Fiber',
    		sodium: 'Sodium'
    	}
        return (
        	<div>
	            <List>
	                {Object.keys(stats).map( (stat) => <StatItem key={stat} stat_name={stats[stat]} stat_value={this.props.stats[stat]} />)}
	            </List>
            </div>
            )
        
    }
}