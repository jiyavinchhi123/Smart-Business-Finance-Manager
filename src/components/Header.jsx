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
      <div className="title">Welcome back</div>
      <div className="profile">
        <button className="btn ghost" type="button" onClick={() => setOpen((v) => !v)}>
          Profile
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
