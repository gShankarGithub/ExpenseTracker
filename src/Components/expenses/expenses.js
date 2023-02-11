import Card from '../card/Card'
import ExpensesFilter from '../expenseFilter/ExpensesFilter';

import './expenses.css'
import { useState } from 'react';
import ExpensesList from '../expensesList/ExpensesList';

function Expenses(props) {
    const [filteredYear, setfilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList expense={filteredExpenses}/>
               

            </Card>
        </div>
    )
}

export default Expenses