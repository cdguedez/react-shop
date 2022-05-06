import React, { useContext } from 'react'
import '@assets/styles/my-order.scss'
import AppContext from '@context/AppContext'
import close from '@assets/icons/icon_close.png'

const MyOrders = () => {
  const { state, removeFromCart } = useContext(AppContext)

  const handleRemoveCart = product => {
    removeFromCart(product)
  }

  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          {state.cart.map(product => (
            <div
              className="shopping-cart"
              key={`orderItem-${product.id}`}
            >
              <figure>
                <img src={product.images[0]} alt={product.title} />
              </figure>
              <p>{product.title}</p>
              <p>$ {product.price}</p>
              <img src={close} alt="Close" onClick={() => handleRemoveCart(product)} />
            </div>
          ))}
          <div className="order">
            <p>
              <span>{state.cart.length} articles</span>
            </p>
            <p>Total $ {state.cart.reduce((acc, curr) => acc + curr.price, 0)}</p>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default MyOrders