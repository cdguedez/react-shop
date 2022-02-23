import React from 'react'
import styled from 'styled-components'
import BtAddCart from '@assets/icons/bt_add_to_cart.svg'

const ProductInfo = () => {
  return (
    <Info>
      <p>$35,00</p>
      <p>Bike</p>
      <p>
        With its practical position, this bike also fulfills a decorative
        function, add your hall or workspace.
      </p>
      <button>
        <img src={BtAddCart} alt="add to cart" />
        Add to cart
      </button>
    </Info>
  )
}

export default ProductInfo

const Info = styled.div`
  margin: 24px 24px 0 24px;
  flex-direction: column;
  & p:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 8px;
  }
  & p:nth-child(2) {
    color: #C7C7C7;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 8px;
  }
  & p:nth-child(3) {
    color: #C7C7C7;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 8px;
  }
  & button {
    background-color: #2C68C2;
    border-radius: 8px;
    border: none;
    color: #FFFFFF;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`