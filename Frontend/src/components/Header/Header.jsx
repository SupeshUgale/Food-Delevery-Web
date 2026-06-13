import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={assets.header_img} alt="Header Banner" />

      <div className="header-content">
        <h1>Order Your Favorite Food</h1>

        <p>
          Fresh, tasty, and affordable food delivered straight to your door.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;