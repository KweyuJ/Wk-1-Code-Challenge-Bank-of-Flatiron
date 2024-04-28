import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({
      date,
      description,
      category,
      amount
    });
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="transaction-fields">
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button id='submit' type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
