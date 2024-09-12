import React from "react";
import "../assets/css/Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <>
      <header>
        <h4 className="logo">GathSession</h4>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
