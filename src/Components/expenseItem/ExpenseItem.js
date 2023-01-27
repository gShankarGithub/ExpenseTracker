import React from 'react'
import Card from '../card/Card'
import ExpenseDate from '../expenseDate/ExpenseDate'
import '../expenseItem/expenseItem.css'

function ExpenseItem(props) {


  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem