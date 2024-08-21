// src/components/Products.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map(product => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </ProductsContainer>
  );
};

export default Products;
