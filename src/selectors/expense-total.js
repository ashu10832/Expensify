import getVisibleExpenses from './expenses'


export default (expenses,filters) => {

    // return the total sum of all the expenses

    const visibleExpenses = getVisibleExpenses(expenses,filters)
    const total  = visibleExpenses.map((expense)=>(expense.amount)).reduce((sum,current)=>{
        return sum+current
    },0)
    return total
}