import React from 'react'
import styled from 'styled-components'
import IconClose from '@components/IconClose'
import ProductInfo from '@components/ProductInfo'

const ProductDetails = () => {
  return (
    <Details>
      <IconClose />
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
      />
      <ProductInfo />
    </Details>
  );
}

export default ProductDetails

const Details = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: #FFFFFF;
  padding-bottom: 8px;
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: -4px 0 4px 0 rgb(0, 0, 0, 0.2);
  & > img:nth-child(2) {
    width: 100%;
    height: 360px;
    object-fit: cover;
    border-radius: 0 0 20px 20px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`