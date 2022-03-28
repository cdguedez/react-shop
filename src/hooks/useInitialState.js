import { useState } from 'react'

const initialState = {
  cart: [],
  productDetails: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  return {
    state,
    addToCart,
  }
}

export default useInitialState