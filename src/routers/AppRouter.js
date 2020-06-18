import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import React from 'react'



const AddExpensePage = () => (
    
    <div>this is my add page</div>

)

const ExpenseDashboardPage = () => (

<div>this is my div</div>

)

const EditExpensePage = () => (

<div>this is my edit</div>

)

const HelpPage = () => (

<div>this is my help</div>

)
const Header = () => (

<div>
<header>
<h1>Expensify App</h1>
<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
<NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
<NavLink to="/help" activeClassName="is-active">Help</NavLink>
</header>
</div>

)


const NotFoundPage = () => (

<div>404 - <Link to="/">Go home</Link></div>

)


const AppRouter = () => (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create"  component={AddExpensePage} />
        <Route path="/help"  component={HelpPage} />
        <Route path="/edit"  component={EditExpensePage} />
        <Route component={NotFoundPage}/>
    
    
    </Switch>
    </BrowserRouter>
    
)

export default AppRouter
    