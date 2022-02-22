import React from "react";
import styled from 'styled-components'
import IconMenu from './../assets/icons/icon_menu.svg'
import NavbarLeft from './../containers/NavbarLeft'
import NavbarRight from './../containers/NavbarRight'

const Header = () => {
  return (
    <Nav>
      <Menu src={IconMenu} alt="menu" className="menu" />
      <NavbarLeft />
      <NavbarRight />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 4px 8px 0 rgb(0,0,0,0.2);
`

const Menu = styled.img`
  display: none;

  @media (max-width: 680px) {
    display: block
  }
`
