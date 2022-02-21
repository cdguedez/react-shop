/**
 * Class Eight
 */

import React from "react";
import { Link } from "react-router-dom"
import "./../assets/styles/header.scss"
import IconMenu from './../assets/icons/icon_menu.svg'
import IconSHopCart from './../assets/icons/icon_shopping_cart.svg'
import LogoYardSale from './../assets/logos/logo_yard_sale.svg'

const Header = () => {
  return (
<nav>
  <img src={IconMenu} alt="menu" className="menu" />
  <div className="navbar-left">
    <img src={LogoYardSale} alt="logo" className="logo" />
    <ul>
      <li>
        <Link to={'/'}>All</Link>
      </li>
      <li>
        <Link to={'/'}>Clothes</Link>
      </li>
      <li>
        <Link to={'/'}>Electronics</Link>
      </li>
      <li>
        <Link to={'/'}>Furnitures</Link>
      </li>
      <li>
        <Link to={'/'}>Toys</Link>
      </li>
      <li>
        <Link to={'/'}>Others</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <ul>
      <li className="navbar-email">platzi@example.com</li>
      <li className="navbar-shopping-cart">
        <img src={IconSHopCart} alt="shopping-cart" />
        <div>2</div>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Header;
