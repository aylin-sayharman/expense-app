import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const handleFormVisibility = () => {
    setFormVisibility(true);
    console.log("formVisibility", formVisibility);
  }

  const cancelNewExpense = () => {
    setFormVisibility(false);
  }

  return (
    <div className="new-expense">
      {formVisibility && 
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          cancelNewExpense={cancelNewExpense} 
        />
      }
      {!formVisibility && 
        <button onClick={handleFormVisibility}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;