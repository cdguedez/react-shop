import React, { useContext } from 'react'
import styled from 'styled-components'
import addToCartImage from '@assets/icons/bt_add_to_cart.svg'
import AppContext from '@context/AppContext'
const ProductItem = ({ product }) => {
  const { id, images, price, title } = product
  const { addToCart } = useContext(AppContext)
  const handleClick = item => {
    addToCart(item)
  }

  return (
    <ProductCard>
      <img
        src={ images[0] }
        alt={title}
      />
      <Info>
        <div>
          <p>$ {price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt='btn-cart' />
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
    cursor: pointer;
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