// Get visible Expenses
export const getVisibleExpenses = (expenses,{sortBy,startDate,endDate,text}) =>{
    return expenses.filter((expense)=>{
      const startDateMatch = typeof startDate !== 'number' ||   expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' ||   expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
  
    
      return startDateMatch && endDateMatch && textMatch
    }).sort((first,second)=>{
      if(sortBy === 'amount'){
        return first.amount  - second.amount 
      }
      else if(sortBy === 'date'){
        return first.createdAt - second.createdAt
      }
    })
  }