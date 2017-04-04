import React, { Component } from 'react';

export class StatsList extends Component {
    render() {
        return (
            <ul>
                {Object.keys(this.props.stats).map((key) => <li key={key}>{key}: {this.props.stats[key]}</li>)}
            </ul>
            )
        
    }
}