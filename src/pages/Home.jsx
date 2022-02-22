import React from 'react'
import './../assets/styles/home.scss'
import Header from './../components/Header'
import BtnCart from './../assets/icons/bt_add_to_cart.svg'
import ProductDetails from '../components/ProductDetails'

const Home = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <section className='main-container'>
        <div className='cards-container'>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
          <div className='product-card'>
            <img
              src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='img-product'
            />
            <div className='product-info'>
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={BtnCart} alt='btn-cart' />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
