import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bechlogo.png";
import hamburgerIcon from "../../assets/images/hamburgercolored.svg";
const Navbar = () => {
  let Links = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Portfolio", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  const [open, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!open);
  };
  return (
    <div className="bg-transparent m-0 p-0">
      <div className="md:flex items-center justify-evenly">
        <div className=" cursor-pointer">
          <span className="">
            <Link to="/">
              <img src={logo} alt="logo" className="w-24" />
            </Link>
          </span>
        </div>

        <div
          onClick={toggleMenu}
          className=" absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <img src={hamburgerIcon} alt="Menu" />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 mr-3 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0">
              {link.name === "Search" ? (
                <Link
                  to={link.link}
                  onClick={toggleMenu}
                  className="duration-500 flex items-center"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  to={link.link}
                  onClick={toggleMenu}
                  className="duration-500"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
