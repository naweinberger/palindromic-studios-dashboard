import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.current,
        }
        console.log(props)
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        return event
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        {this.props.links.map( 
                            (route, index) => 
                            <MenuItem key={index}
                                    value={index}
                                    primaryText={route.text}
                                    containerElement={<Link to={route.path} />} />

                        )}
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label='Add Entry' />
                </ToolbarGroup>
            </Toolbar>
            )
    }
}