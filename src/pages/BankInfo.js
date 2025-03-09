import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Use useNavigate hook

const BankInfo = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>About Our Bank</h2>
      <p>We provide financial services that you can trust.</p>
      
      {/* Redirects to Profile Page Instead of Register */}
      <button 
        onClick={() => navigate("/profile")} 
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Register Now
      </button>
    </div>
  );
};

export default BankInfo;
