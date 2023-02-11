import React from 'react'
import ExpenseItem from '../expenseItem/ExpenseItem'
import './expensesList.css'



function ExpensesList(props) {
    if(props.expense.length===0){
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.expense.map(expenses => { return <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} /> })}
        </ul>
    )
}

export default ExpensesList