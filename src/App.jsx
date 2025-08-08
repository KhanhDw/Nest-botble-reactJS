import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.error('Lỗi khi gọi API:', error)
      })
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map(product => (
          <li key={product.product_id}>
            {product.product_name} - {product.product_price}đ
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
