import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const yearChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
    // props.items.filter((expense) => expense.date.includes(selectedYear))
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;