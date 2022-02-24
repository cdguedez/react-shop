import React from 'react'
import styled from 'styled-components'

const MainContainer = ({ children }) => {
  return (
    <Container>
      <CardsContainer>
        { children }
      </CardsContainer>
    </Container>
  )
}

export default MainContainer

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