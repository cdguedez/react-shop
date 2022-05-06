import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import IconSHopCart from '@assets/icons/icon_shopping_cart.svg'
import DesktopMenu from '@components/DesktopMenu'
import AppContext from '@context/AppContext'
import MyOrders from '@components/MyOrders'

const NavbarRight = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { cart } = useContext(AppContext).state
  const cardItems = cart.length
  console.log('render navRight')
  return (
    <>
      <Navbar>
        <ul>
          <NavbarEmail onClick={() => setIsVisible(!isVisible)}>
            platzi@example.com
          </NavbarEmail>
          <NavbarShoppCart onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={IconSHopCart} alt="shopping-cart" />
            { cardItems > 0 && <div>{cardItems}</div> }
          </NavbarShoppCart>
        </ul>
      </Navbar>
      { isVisible && <DesktopMenu /> }
      { toggleOrders && <MyOrders /> }
    </>
  )
}

export default NavbarRight

const Navbar = styled.div`
  display: flex;
  flex-firection: row;
  list-style: none;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 60px;
  }
  & ul li a {
    text-decoration: none;
    color: #C7C7C7;
    border: 1px solid #FFFFFF;
    padding: 8px;
    border-radius: 8px;
  }
  & ul li a:hover {
    border: 1px solid #2C68C2;
    color: #2C68C2;
  }
`

const NavbarEmail = styled.li`
  color: #C7C7C7;
  font-size: 14px;
  margin-right: 12px;
  cursor: pointer;
  
  @media (max-width: 680px) {
    display: none
  }
`

const NavbarShoppCart = styled.li`
  position: relative;
  cursor: pointer;
  & div {
    width: 16px;
    height: 16px;
    background-color: #2C68C2;
    color: var(--white);
    border-radius: 50%;
    font-size: var(--sm);
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`