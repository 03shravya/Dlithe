import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  
  // Check if user is registered (retrieved from localStorage)
  const [isRegistered, setIsRegistered] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Deposit");

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setIsRegistered(true);
    }
  }, []);

  // Handle transaction submission
  const handleTransaction = (e) => {
    e.preventDefault();
    const newAmount = parseFloat(amount);
    if (isNaN(newAmount) || newAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newTransaction = { id: transactions.length + 1, type, amount: newAmount };
    setTransactions([...transactions, newTransaction]);
    setBalance(type === "Deposit" ? balance + newAmount : balance - newAmount);
    setAmount(""); // Clear input field
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#007bff" }}>Transaction History</h1>

      {/* If user is NOT registered, show a message */}
      {!isRegistered ? (
        <div>
          <h2 style={{ color: "#dc3545" }}>No Profile Found!</h2>
          <p>Please <strong>register</strong> first to view transactions.</p>
          <button 
            onClick={() => navigate("/profile")}
            style={{ 
              padding: "10px 20px", 
              backgroundColor: "#007bff", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer" 
            }}
          >
            Go to Profile
          </button>
        </div>
      ) : (
        <>
          {/* Show Balance */}
          <h2 style={{ color: balance >= 0 ? "#28a745" : "#dc3545" }}>
            Current Balance: ₹{balance}
          </h2>

          {/* Transaction List */}
          <ul style={{ padding: 0, listStyle: "none", maxWidth: "400px", margin: "auto" }}>
            {transactions.length > 0 ? (
              transactions.map((tx) => (
                <li
                  key={tx.id}
                  style={{
                    padding: "10px",
                    margin: "5px 0",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    backgroundColor: tx.type === "Deposit" ? "#d4edda" : "#f8d7da",
                    color: tx.type === "Deposit" ? "#155724" : "#721c24",
                  }}
                >
                  <strong>{tx.type}:</strong> ₹{tx.amount}
                </li>
              ))
            ) : (
              <p>No transactions yet.</p>
            )}
          </ul>

          {/* Add Transaction Form */}
          <form onSubmit={handleTransaction} style={{ marginTop: "20px" }}>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              style={{ padding: "10px", marginRight: "10px" }}
            />
            <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: "10px" }}>
              <option value="Deposit">Deposit</option>
              <option value="Withdrawal">Withdrawal</option>
            </select>
            <button
              type="submit"
              style={{ marginLeft: "10px", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Add Transaction
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Transactions;
