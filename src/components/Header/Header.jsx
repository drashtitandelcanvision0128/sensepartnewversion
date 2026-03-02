import React from "react";

import "./header.css";

const Header = () => {
  const navItems = ["Home", "About", "Services", "Blog", "Contact"];

  return (
    <header>
      <div className="container">
        <div className="logo">Logo</div>

        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>

        <div className="auth">
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;