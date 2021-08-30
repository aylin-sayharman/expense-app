import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
// 1st way - individual useStates
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

// 2nd way - multiple useStates
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {

  // individual set state
    setEnteredTitle(event.target.value);

  // multiple set states
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

  // multiple set states - when it depends previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.cancelNewExpense();
  };

  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancelNewExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;