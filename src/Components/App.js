
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setFilteredTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    alert('Transaction added');

  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="container">
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
