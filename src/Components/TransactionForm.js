import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(function (prevData) {
      return { ...prevData, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddTransaction(formData);

    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
      </label>
      <label>
        Amount:
        <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
