import React, { useEffect, useState } from 'react';
import productApi from './api/productApi';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productApi.getAll().then(res => {
      setProducts(res.data);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map(p => (
          <li key={p.product_id}>
            {p.product_name} - {p.product_price}₫
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
