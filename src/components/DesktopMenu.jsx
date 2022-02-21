/**
 * Class seven
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './../assets/styles/desktop-menu.scss'

const DesktopMenu = () => {
  return (
    <div class="desktop-menu">
      <ul>
        <li>
          <Link to={'/my-orders'} class="title">My orders</Link>
        </li>
  
        <li>
          <Link to={'/edit-account'}>My account</Link>
        </li>
  
        <li>
          <Link to={'/logout'}>Sign out</Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopMenu