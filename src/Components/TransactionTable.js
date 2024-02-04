import React, { useState } from 'react';

function TransactionTable({ transactions, onDelete }) {
  const [sortType, setSortType] = useState(null);

  const handleSort = (type) => {
    setSortType(type);
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortType === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortType === 'description') {
      return a.description.localeCompare(b.description);
    }
    return 0;
  });

  return (
    <div>
      <button onClick={() => handleSort('category')}>Sort by Category</button>
      <button onClick={() => handleSort('description')}>Sort by Description</button>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => onDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
