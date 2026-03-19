import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  let user = {};
  let company = {};
  try {
    user = JSON.parse(localStorage.getItem("sbfm_user") || "{}");
    company = JSON.parse(localStorage.getItem("sbfm_company") || "{}");
  } catch {}
  const handleLogout = () => {
    localStorage.removeItem("sbfm_user");
    localStorage.removeItem("sbfm_company");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="profile">
        <button className="profile-trigger" type="button" onClick={() => setOpen((v) => !v)}>
          <span className="profile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.8-3.5 5-5 8-5s6.2 1.5 8 5" />
            </svg>
          </span>
          <span>Profile</span>
        </button>
        {open && (
          <div className="profile-menu">
            <div className="profile-name">{user.name || "Business Owner"}</div>
            <div className="profile-line">Email: {user.email || "-"}</div>
            <div className="profile-line">Business: {company.name || "-"}</div>
            <div className="profile-line">Type: {company.businessType || "-"}</div>
            <button className="btn ghost" type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
