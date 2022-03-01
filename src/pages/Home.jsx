import React from 'react'
import Header from '@components/Header'
import ProductDetails from '@components/ProductDetails'
import MainContainer from '@containers/MainContainer'

const Home = () => {
  return (
    <>
      <Header />
      { false && <ProductDetails /> }
      <MainContainer>
      </MainContainer>
    </>
  );
};

export default Home;
