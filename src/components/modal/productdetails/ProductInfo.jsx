// src/components/ProductInfo.js
import React from 'react';

const ProductInfo = ({ name, description }) => {
  return (
    <div className="product-info">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductInfo;
