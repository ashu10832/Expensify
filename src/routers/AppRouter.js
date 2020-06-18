import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import React from 'react'
import NotFoundPage from './../components/NotFoundPage'
import AddExpensePage from './../components/AddExpensePage'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import Header from './../components/Header'




const AppRouter = () => (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create"  component={AddExpensePage} />
        <Route path="/help"  component={HelpPage} />
        <Route path="/edit/:id"  component={EditExpensePage} />
        <Route component={NotFoundPage}/>
    
    
    </Switch>
    </BrowserRouter>
    
)

export default AppRouter
    