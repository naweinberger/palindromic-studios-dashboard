import React, { Component } from 'react';

export class EntryInput extends Component {
    render() {
        return (
            <ul>
            { this.props.foods.map( (food) => <li key={food.id}>{food.name}</li> ) }
            </ul>
        )
    }
}