//import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import {getVisibleExpenses} from './selectors/expenses'


const store = configureStore()

//console.log(store.getState())

const expenseOne = store.dispatch(addExpense({description:'Gas Bill', note:'Due', amount:1000,createdAt:100}))
const expenseTwo = store.dispatch(addExpense({description:'Phone Bill', note:'Due', amount:1000,createdAt:100}))

store.dispatch(setTextFilter('gas'))

console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters))



// addExpense ->  gas bill

ReactDOM.render(<AppRouter />,document.getElementById('app'))