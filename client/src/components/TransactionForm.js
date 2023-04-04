import React from "react";
import { useState } from "react";
import "../App.css"


function TransactionForm({ onAddTransaction }) {

    const [transaction_type, setTransaction_type] = useState("")
    const [amount, setAmount] = useState("")
    const [notification, setNotification] =useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const transaction = {
            transaction_type: transaction_type,
            amount: amount
        }

        fetch("transactions", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(transaction)
        })
            .then(resp => resp.json())
            .then(transaction => onAddTransaction(transaction))
            setNotification (true)
            setTimeout (()=> window.location.reload(), 1000)
    }

    return (
        <div id="form" style={{ backgroundColor: '#FFFFFF' }}>
          <form onSubmit={handleSubmit}>
            <h3 className="headers">Add Your Transaction Here</h3>
            <input
              className="form-control"
              onChange={(e)=>setTransaction_type(e.target.value)}
              placeholder="Description"
              type="text"
              name="description"
              value={transaction_type}
            />
            <input
              className="form-control"
              onChange={(e)=>setAmount(e.target.value)}
              placeholder="Amount"
              type="number"
              name="amount"
              value={amount}
            />
            <button className="btn btn-primary" id="button" type="submit">Add Transaction</button>
            {notification && <div>Transaction Added Successfully</div>}
          </form>
        </div>
        
      );
    };
    
    export default TransactionForm;
 