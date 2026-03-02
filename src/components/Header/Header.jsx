import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo">Logo</div>

        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
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