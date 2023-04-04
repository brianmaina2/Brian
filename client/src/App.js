import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionList from "./components/TransactionList"
import TransactionForm from "./components/TransactionForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useState } from "react";

function App() {

const[transactions,setTransactions]=useState([])

function onAddTransactions(transaction){
  setTransactions([...transactions,transaction])
}

  return (
    <Router>

      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/transactionform" element={<TransactionForm onAddTransaction={onAddTransactions} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App