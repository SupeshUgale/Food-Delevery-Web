import React from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="div1">
        <img
          src={assets.logo}
          alt="Foodie India Logo"
          className="logoimg"
        />
      </div>

      <div className="div2">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact Us</li>
          <li>Report</li>
        </ul>
      </div>

      <div className="div3">
        <img
          src={assets.search_icon}
          alt="Search"
          className="img2"
        />

        <img
          src={assets.basket_icon}
          alt="Basket"
          className="img1"
        />

        <button>Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;