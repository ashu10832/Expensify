import moment from 'moment'

// Get visible Expenses
export default (expenses,{sortBy,startDate,endDate,text}) => {
    return expenses.filter((expense)=>{
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = !startDate ? true : startDate.isSameOrBefore(createdAtMoment,'day') ;
      const endDateMatch = !endDate ? true :  endDate.isSameOrAfter(createdAtMoment,'day') ;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
  
    
      return startDateMatch && endDateMatch && textMatch
    }).sort((first,second)=>{
      if(sortBy === 'amount'){
        return second.amount  - first.amount 
      }
      else if(sortBy === 'date'){
        return second.createdAt - first.createdAt
      }
    })
  }

