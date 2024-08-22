// src/App.js
import React, { useState } from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';
import useProducts from './hooks/useProducts';

function App() {
  const { products, loading, error } = useProducts();
  const [expandedProductId, setExpandedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setExpandedProductId(productId);
  };

  const handleOutsideClick = () => {
    setExpandedProductId(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div onClick={handleOutsideClick}>
      <Title>Produtos Disponíveis</Title>
      <Description>Aqui você encontra uma variedade de produtos!</Description>
      <Products 
        products={products} 
        expandedProductId={expandedProductId} 
        onProductClick={handleProductClick} 
        onOutsideClick={handleOutsideClick} 
      />
    </div>
  );
}

export default App;
