import React from 'react'

import { assets } from '../../assets/assets';
import "./Header.css";
const Header = () => {
  return (
   <div className="header">
    <img src={assets.header_img} alt="Header" />
    <h1 >Order Your.....    Favorite Food</h1>
    <h4>Fresh, tasty, and affordable food delivered straight to your door</h4>
       

</div>
  )
}

export default Header
