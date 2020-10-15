import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Alert from './components/Alert';
import uuid from 'uuid/v4';

const initialExpenses = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'Car payment', amount: 162 },
  { id: uuid(), charge: 'rent', amount: 1600 },
];
// console.log(initialExpenses);

//import useState()
//function returns [] with two value

function App() {
  // console.log(useState());
  //State values
  //all expenses,add expenses

  const [expenses, setExpenses] = useState(initialExpenses);
  //single expanse

  const [charge, setCharge] = useState('');

  //single amount
  const [amount, setAmount] = useState('');
  //Functionality
  const handleCharge = (e) => {
    console.log('{e.target.value}');
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className='App'>
        <Form
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <List expenses={expenses} />
      </main>
      <h1>
        Total Spending :{''}
        <span className='total'>
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
