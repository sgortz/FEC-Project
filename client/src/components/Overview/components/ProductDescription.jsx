import React from 'react';
import './ProductDescription.css';

const ProductDescription = (props) => {
  // console.log(props.features)
  return (
  <div className="about-style">
    <p className="product-slogan">{props.product.slogan}</p>
    <p className="product-description">{props.product.description}</p>
    <hr className="divider" />
    <p className="clothes-features"></p>
  </div>
)}

export default ProductDescription;