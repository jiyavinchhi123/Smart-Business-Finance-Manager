import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">Smart Business Finance Manager</div>
      <nav className="nav">
        <Link to="/app">Dashboard</Link>
        <Link to="/app/summary">Business Summary</Link>
        <Link to="/app/customers">Customers</Link>
        <Link to="/app/suppliers">Suppliers</Link>
        <Link to="/app/money-in">Money In</Link>
        <Link to="/app/money-out">Money Out</Link>
        <Link to="/app/smart-entry">Smart Entry</Link>
        <Link to="/app/download-balance-sheet">Download Report</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
