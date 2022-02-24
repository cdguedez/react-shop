import React from 'react'
import Header from '@components/Header'
import ProductDetails from '@components/ProductDetails'
import MainContainer from '@containers/MainContainer'
import ProductItem from '@components/ProductItem'

const Home = () => {
  return (
    <>
      <Header />
      { false && <ProductDetails /> }
      <MainContainer>
        <ProductItem />
      </MainContainer>
    </>
  );
};

export default Home;
