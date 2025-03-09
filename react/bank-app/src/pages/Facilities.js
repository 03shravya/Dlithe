import React from "react";

const Facilities = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#007bff" }}>Our Facilities</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          ✔ 24/7 Customer Support
        </li>
        <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          ✔ Secure Online Banking
        </li>
        <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          ✔ ATM Services Worldwide
        </li>
        <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          ✔ Loan & Investment Plans
        </li>
      </ul>
    </div>
  );
};

export default Facilities;
