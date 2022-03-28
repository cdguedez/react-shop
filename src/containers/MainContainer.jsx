import React, { memo, useState } from 'react'
import styled from 'styled-components'
import ProductItem from '@components/ProductItem'
import useProducts from '@hooks/useProducts'
import ProductDetails from '@components/ProductDetails'

const API = `https://api.escuelajs.co/api/v1/products?limit=10&offset=1`

const MainContainer = () => {
  const [data, setData] = useState({ product: {}, isOpen: false })
  const products = useProducts(API)
  
  return (
    <Container>
      <CardsContainer>
        {products.map(product => <ProductItem key={product.id} product={product} />)}
      </CardsContainer>
      { data.isOpen && <ProductDetails /> }
    </Container>
  )
}

export default memo(MainContainer)

const Container = styled.main`
  margin-top: 12px;
`

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 26px;
  place-content: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, 140px);
  }
`