import Card from '../card/Card'
import ExpenseDate from '../expenseDate/ExpenseDate'
import '../expenseItem/expenseItem.css'

function ExpenseItem(props) {

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  )
}

export default ExpenseItem