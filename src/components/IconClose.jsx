import React from 'react'
import styled from 'styled-components'
import CloseImg from '@assets/icons/icon_close.png'
const IconClose = ({ hideDetail }) => {
  return (
    <Icon onClick={hideDetail}>
      <img src={CloseImg} alt='close' />
    </Icon>
  )
}

export default IconClose

const Icon = styled.div`
  background-color: #FFFFFF;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 10;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
`