import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="image"></div>
      <div className="right">
        <span>
          <Link to="#about">About</Link>
        </span>
        <span>
          <Link to="#services">Services</Link>
        </span>
        <span>
          <Link to="#contact">Contact</Link>
        </span>
        <span>
          <Link to="#portfolio">Portfolio</Link>
        </span>
        <span>
          <Link to="#blog">Blog</Link>
        </span>
        <span>
          <Link to="#contact">Contact</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
