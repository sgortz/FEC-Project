import React from 'react';
import StarReview from './StarReview.jsx';
import './ProductDetail.css'

const ProductDetail = (props) => {
  let category = props.product.category.toUpperCase();
    return (
      <>
        <p className="product-category">{category}</p>
        <h1 className="product-name">{props.product.name}</h1>
        <StarReview />
        <p className="product-price">${props.product.default_price}</p>
      </>
    )
}

export default ProductDetail;