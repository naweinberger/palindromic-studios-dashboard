import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import MenuItem from 'material-ui/MenuItem'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

export class EntryInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: new Date(),
            amount: ''
        }
    }
    formatDate = (date) => {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        return y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }

    handleFoodSelect = (chosenRequest, index) => {
        this.setState({
            selectedFood: chosenRequest.id
        })
        console.log(chosenRequest.id)
    }
    handleDateSelect = (event, date) => {
        this.setState({
            selectedDate: date
        })
        console.log(this.formatDate(date))
    }
    handleAmountSelect = (event, newValue) => {
        this.setState({
            amount: newValue
        })
        console.log(newValue)
    }
    submitEntry = () => {
        if (
            parseInt(this.state.selectedFood) > 0 &&
            parseInt(this.state.amount) > 0
        ) {
            this.props.submitEntry(
                this.formatDate(this.state.selectedDate),
                this.state.selectedFood,
                this.state.amount
            )
            this.setState({
                selectedDate: new Date(),
                selectedFood: '',
                amount: ''
            })
            this.refs.food_autocomplete.setState({ searchText: ''})
        }
        else {
            console.log('Invalid arguments')
        }
    }
    render() {
        const dataSourceConfig = {
            text: 'name',
            value: 'id'
        }
        return (
            <div style={{width: 400, display: 'inline-block'}}>
                <Card style={{paddingLeft: 25, paddingRight: 25, paddingBottom: 20, margin: 10}}>
                    <CardHeader
                      style={{textAlign: 'left', paddingBottom: 0}}
                      title="Add Entry"
                    />
                    <CardText style={{paddingTop: 0}}>
                        <AutoComplete
                            style={{paddingTop: -10}}
                            ref={`food_autocomplete`}
                            value={this.state.selectedFood}
                            floatingLabelText='Choose a food'
                            filter={AutoComplete.caseInsensitiveFilter}
                            openOnFocus={true}
                            dataSource={this.props.foods}
                            dataSourceConfig={dataSourceConfig}
                            onNewRequest={this.handleFoodSelect}
                            fullWidth={true}
                        />
                        <TextField
                            value={this.state.amount}
                            hintText='Amount'
                            fullWidth={true}
                            onChange={this.handleAmountSelect}
                        />
                        <DatePicker
                            hintText='Choose a date'
                            value={this.state.selectedDate}
                            onChange={this.handleDateSelect}
                            fullWidth={true}
                        />
                    </CardText>
                    <div style={{display: 'block', textAlign: 'right'}}>
                        <RaisedButton label='Submit' primary={true} onClick={this.submitEntry}/>
                    </div>
                </Card>
            </div>
        )
    }
}