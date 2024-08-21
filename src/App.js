// src/App.js
import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading products:', error));
  }, []);

  return (
    <div>
      <Title>Produtos Disponíveis</Title>
      <Description>Aqui você encontra uma variedade de produtos!</Description>
      <Products products={products} />
    </div>
  );
}

export default App;
