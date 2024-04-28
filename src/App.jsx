import "./App.css";
import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionsTable from "./components/TransactionsTable";
import TransactionsSearch from "./components/TransactionsSearch";

function App() {
  const [transactions, setTransactions] = useState([
    {
      date: "2019-12-06",
      description: "Chipotle",
      category: "Food",
      amount: -17,
    },
    {
      date: "2019-12-06",
      description: "Venmo, Alice Pays you for Burrito",
      category: "Food",
      amount: 8.75,
    },
    {
      date: "2019-12-04",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: -24.99,
    },
    {
      date: "2019-12-02",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    }
  ]);
  
  const [filteredTransactions, setFilteredTransactions] = useState([
    {
      date: "2019-12-06",
      description: "Chipotle",
      category: "Food",
      amount: -17,
    },
    {
      date: "2019-12-06",
      description: "Venmo, Alice Pays you for Burrito",
      category: "Food",
      amount: 8.75,
    },
    {
      date: "2019-12-04",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: -24.99,
    },
    {
      date: "2019-12-02",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    },
  ]);

  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const handleSearchChange = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <TransactionsSearch filterTransactions={handleSearchChange} />{" "}
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
