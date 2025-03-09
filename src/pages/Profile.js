import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ For redirecting after deletion

const Profile = () => {
  const navigate = useNavigate();

  // Load profile data from localStorage if available
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setFormData(JSON.parse(storedProfile));
      setIsRegistered(true);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Register)
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData)); // Save to localStorage
    setIsRegistered(true);
  };

  // Handle Profile Edit
  const handleEdit = () => {
    setIsRegistered(false); // Go back to registration form
  };

  // Handle Profile Deletion
  const handleDelete = () => {
    localStorage.removeItem("userProfile"); // Remove profile from localStorage
    setIsRegistered(false);
    setFormData({ name: "", email: "", phone: "", password: "" }); // Clear state
    navigate("/bank-info"); // Redirect to Bank Info after deletion
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#007bff" }}>Profile</h1>

      {/* Show Profile if Registered */}
      {isRegistered ? (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "50%",
            margin: "auto",
            backgroundColor: "#f8f9fa",
          }}
        >
          <h2>Welcome, {formData.name}!</h2>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>

          {/* Edit and Delete Buttons */}
          <button
            onClick={handleEdit}
            style={{
              backgroundColor: "#ffc107",
              color: "black",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        // Show Registration Form if Not Registered
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
