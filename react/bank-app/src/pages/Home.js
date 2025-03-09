import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#007bff" }}>Welcome to PrimeBank</h1>
      <p>Your trusted financial partner</p>
      <img
        src="/bank.jpg"
        alt="Bank"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
};

export default Home;
