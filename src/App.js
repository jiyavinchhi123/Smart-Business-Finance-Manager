import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./styles.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateCompany from "./pages/CreateCompany";
import BusinessSummary from "./pages/BusinessSummary";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import MoneyIn from "./pages/MoneyIn";
import MoneyOut from "./pages/MoneyOut";
import SmartEntry from "./pages/SmartEntry";
import DownloadBalanceSheet from "./pages/DownloadBalanceSheet";

const AppLayout = () => {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="page-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-company" element={<CreateCompany />} />
          <Route path="summary" element={<BusinessSummary />} />
          <Route path="download-balance-sheet" element={<DownloadBalanceSheet />} />
          <Route path="customers" element={<Customers />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="money-in" element={<MoneyIn />} />
          <Route path="money-out" element={<MoneyOut />} />
          <Route path="smart-entry" element={<SmartEntry />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
