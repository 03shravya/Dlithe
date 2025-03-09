import { Routes, Route, NavLink } from "react-router-dom"; // ✅ Use NavLink for automatic highlighting
import Home from "./pages/Home";
import BankInfo from "./pages/BankInfo";
import Facilities from "./pages/Facilities";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import "./index.css";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>PrimeBank</h1>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/bank-info" className={({ isActive }) => (isActive ? "active" : "")}>Bank Info</NavLink>
          <NavLink to="/facilities" className={({ isActive }) => (isActive ? "active" : "")}>Facilities</NavLink>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? "active" : "")}>Transactions</NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank-info" element={<BankInfo />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
