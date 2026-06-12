import React from 'react';
import { assets } from '../../assets/assets';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div >
      <nav className='navbar'>
        <div className='div1'>
        <img src={assets.logo} alt='Foodie India Logo' className='logoimg' />
        
      </div>

      <div className='div2'>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Order Location</li>
          <li>Report</li>
        
        </ul>
      </div>
      <div className='div3'>
        <img src={assets.basket_icon} alt='bascket logo' className='img1'/>
         <img src={assets.search_icon} alt='search icon' className='img2'/>
         
        <button>Log in</button>
    
      </div>
      </nav>
     
    </div>
  );
};

export default Navbar;