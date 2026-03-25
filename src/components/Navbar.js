import React from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">myIR</div>

      <div className="navbar__actions">
        <button type="button" className="icon-btn" aria-label="User account">
          <FaRegUserCircle />
        </button>

        <button type="button" className="icon-btn" aria-label="Open menu">
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;