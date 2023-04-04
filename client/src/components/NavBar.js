import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function FinanceNavbar() {
  return (
    <div className="nav-bar">
  <h1>Finance Manager</h1>
  <Link to="/">Home</Link>
  <Link to="/transactions">Transactions</Link>
  <Link to="/transactionform">Add Transaction</Link>
  <Link to="/">Logout</Link>
</div>

  );
}

export default FinanceNavbar;
