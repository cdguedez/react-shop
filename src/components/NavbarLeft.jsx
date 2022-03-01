import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoYardSale from '@assets/logos/logo_yard_sale.svg'

const NavbarLeft = () => {
  console.log('render navLeft')
  return (
    <Navbar>
      <Logo src={LogoYardSale} alt="logo" />
      <ul>
        <li>
          <Link to={'/store'}>All</Link>
        </li>
        <li>
          <Link to={'/clothes'}>Clothes</Link>
        </li>
        <li>
          <Link to={'/electronics'}>Electronics</Link>
        </li>
        <li>
          <Link to={'/furnitures'}>Furnitures</Link>
        </li>
        <li>
          <Link to={'/toys'}>Toys</Link>
        </li>
        <li>
          <Link to={'/others'}>Others</Link>
        </li>
      </ul>
    </Navbar>
  )
}

export default memo(NavbarLeft)

const Navbar = styled.div`
  display: flex;
  flex-firection: row;
  list-style: none;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 12px;
    display: flex;
    align-items: center;
    height: 60px;
  }
  & ul li a {
    text-decoration: none;
    color: #C7C7C7;
    border: 1px solid #FFFFFF;
    padding: 8px;
    border-radius: 4px
  }
  & ul li a:hover {
    border: 1px solid #2C68C2;
    color: #2C68C2;
  }

  @media (max-width: 680px) {
    & ul {
      display: none;
    }
  }
`
const Logo = styled.img`
  width: 100px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    display: none;
  } 
`