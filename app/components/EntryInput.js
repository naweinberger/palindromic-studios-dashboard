import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'

export class EntryInput extends Component {
    handleRequest(chosenRequest, index) {
        console.log(chosenRequest.id)
    }
    render() {
        const dataSourceConfig = {
            text: 'name',
            value: 'id'
        }
        return (
            <AutoComplete
                floatingLabelText="Choose a food"
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={this.props.foods}
                dataSourceConfig={dataSourceConfig}
                onNewRequest={this.handleRequest}
            />            
        )
    }
}