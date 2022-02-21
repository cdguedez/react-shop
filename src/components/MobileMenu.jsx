/**
 * class eight
*/

import React from 'react'
import { Link } from 'react-router-dom'
import './../assets/styles/mobile-menu.scss'

const MobileMenu = () => {
  return (
    <div class="mobile-menu">
      <ul>
        <li>
          <Link to={'/'}>CATEGORIES</Link>
        </li>
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
          <Link to={'/'}>Other</Link>
        </li>
      </ul>
  
      <ul>
        <li>
          <Link to={'/'}>My orders</Link>
        </li>
        <li>
          <Link to={'/'}>My account</Link>
        </li>
      </ul>
  
      <ul>
        <li>
          <Link to={'/'} class="email">platzi@example.com</Link>
        </li>
        <li>
          <Link to={'/'} class="sign-out">Sign out</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu