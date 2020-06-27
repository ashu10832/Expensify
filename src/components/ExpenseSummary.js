import React from 'react'
import {connect} from 'react-redux'
import expenseTotal from '../selectors/expense-total'


const ExpenseSummary = (props) => {

    return (
        <p>Total expenses {props.total}</p>
    )
}

const mapStateToProps = (state,props) => ({
    total:expenseTotal(state.expenses,state.filters)
})

export default connect(mapStateToProps)(ExpenseSummary)
