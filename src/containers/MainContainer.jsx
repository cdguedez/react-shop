import React, { memo } from 'react'
import styled from 'styled-components'
import ProductItem from '@components/ProductItem'
import useProducts from '@hooks/useProducts'

const API = `https://api.escuelajs.co/api/v1/products?limit=10&offset=0`

const MainContainer = () => {
  const products = useProducts(API)
  console.info('render MainContainer')
  return (
    <Container>
      <CardsContainer>
        {products.map(product => <ProductItem key={product.id} product={product} />)}
      </CardsContainer>
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