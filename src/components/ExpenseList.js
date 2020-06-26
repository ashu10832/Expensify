import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'
import ExpenseListFilter from './ExpenseListFilters'

const ExpenseList = (props) =>(
    <div>

    <h1>Expense List {props.expenses.length}</h1>
    {props.expenses.map((expense)=>(
        <ExpenseListItem key={expense.id} {...expense}/>
    ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

