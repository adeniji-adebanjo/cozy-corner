import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <h3>Cozy Corner</h3>
        <nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Featured</a>
          <a href="/">Blog</a>
          <a href="/">More</a>
        </nav>
        <button type="button">Sign In</button>
        <button type="button">SignUp</button>
      </header>
    </>
  );
};

export default Navbar;
