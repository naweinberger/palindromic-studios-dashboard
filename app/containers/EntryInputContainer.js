import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../actions'
import { fetchFoods } from '../actions/api'
import { EntryInput } from '../components/EntryInput'
import _ from 'lodash'

const mapStateToProps = (state) => {
    return {
        foods: state.foods.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchFoods: () => {
            dispatch(fetchFoods())
        },
        onSubmit: (food, amount, date) => {
            dispatch(addEntry(food, amount, date))
        } 
    }
}

class EntryInputContainer extends Component {
    componentDidMount() {
        this.props.fetchFoods();
    }

    componentDidUpdate(lastProps) {

    }

    render() {
        return (
            <EntryInput {...this.props} />
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryInputContainer)