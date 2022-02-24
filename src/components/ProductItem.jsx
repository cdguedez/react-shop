import React from 'react'
import styled from 'styled-components'
import BtnCart from '@assets/icons/bt_add_to_cart.svg'

const ProductItem = () => {
  return (
    <ProductCard>
      <img
        src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='img-product'
      />
      <Info>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={BtnCart} alt='btn-cart' />
        </figure>
      </Info>
    </ProductCard>
  )
}

export default ProductItem

const ProductCard = styled.article`
  width: 240px;
  & img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    width: 140px;
    & img {
      width: 140px;
      height: 140px;
    }
  }
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  & figure {
    margin: 0;
  }
  & figure img {
    cursor: pointer;
    width: 36px;
    height: 36px;
  }
  & div p:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 4px;
  }
  & div p:nth-child(2) {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
    color: #C7C7C7;
  }
`