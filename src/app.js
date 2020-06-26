//import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter,} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'


const store = configureStore()

//console.log(store.getState())

const expenseOne = store.dispatch(addExpense({description:'Gas Bill', note:'Due', amount:1000,createdAt:200}))
const expenseTwo = store.dispatch(addExpense({description:'Phone Bill', note:'Due', amount:1000,createdAt:100}))
const expenseThree = store.dispatch(addExpense({description:'Rent', note:'Paid', amount:10000,createdAt:300}))


console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters))


const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx,document.getElementById('app'))