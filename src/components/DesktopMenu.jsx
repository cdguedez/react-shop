import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DesktopMenu = () => {
  return (
    <DesktopMenuStyled>
      <List>
        <Item>
          <Link to={'/my-orders'}>My orders</Link>
        </Item>
        <Item>
          <Link to={'/edit-account'}>My account</Link>
        </Item>
        <Item>
          <Link to={'/logout'}>Sign out</Link>
        </Item>
      </List>
    </DesktopMenuStyled>
  )
}

export default DesktopMenu

const DesktopMenuStyled = styled.div`
  width: 100px;
  height: auto;
  border: 1px solid #C7C7C7;
  border-radius: 6px;
  padding: 20px 20px 0 20px;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #FFFFFF;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  text-align: end;
  &:nth-child(1),&:nth-child(2) {
    font-weight: bold;
  }
  &:last-child a {
    color: #2C68C2;
    font-size: 14px;
  }
  & a {
    text-decoration: none;
    color: #000000;
    margin-bottom: 12px;
    display: inline-block;
  }
`