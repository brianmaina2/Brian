import React, { useState, useEffect } from 'react';
import Edit from './Edit';


function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('transactions')
      .then(res => res.json())
      .then(transactions => setTransactions(transactions))
  }, []);

  const handleDelete = (id) => {
    fetch(`transactions/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        if (window.confirm("Do you want to delete this Item?")) {
          const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
          setTransactions(updatedTransactions);
        }
      })

  }

  // const handleEdit = (id) => {
    
  //   console.log(`Editing transaction with ID ${id}`);
  // }

  return (
    <div style={{ 
      backgroundImage: "url(https://img.freepik.com/free-photo/oak-wooden-textured-design-background_53876-143033.jpg)", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      position: 'relative', 
      height: '100vh' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(555, 555, 255, 0.7)' }}>
        
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
            </tr>
            <tr>
              <th style={{ width: '25%', color: 'blue' }}>Date</th>
              <th style={{ width: '25%', color: 'blue' }}>Description</th>
              <th style={{ width: '25%', color: 'blue' }}>Amount</th>
              <th style={{ width: '25%', color: 'blue' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td style={{ color: 'blue' }}>{transaction.created_at}</td>
                <td style={{ color: 'blue' }}>{transaction.transaction_type}</td>
                <td style={{ color: 'blue' }}>{transaction.amount}</td>
                <td>
                  <button className="delete" onClick={() => handleDelete(transaction.id)}>Delete</button>
                  <button className="edit"><Edit t={transaction} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  


  );
}

export default TransactionList;
