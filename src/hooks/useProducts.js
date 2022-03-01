import { useEffect, useState } from 'react'
import axios from 'axios'

const useProducts = (URL) => {
  const [products, setProducts] = useState([])
  
  useEffect(async () => {
    const { data } = await axios.get(URL)
    setProducts(data)
  }, [])
  return products
}

export default useProducts;