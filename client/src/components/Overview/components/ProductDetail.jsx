import React from 'react';
import StarReview from './StarReview.jsx';
import './ProductDetail.css'

const ProductDetail = ({ data }) => {
  // let category = props.product.category.toUpperCase();
  if (data === undefined) {
    return null;
  } else if (data[1].results[0].sale_price === null) {
    return (
      <>
        <p className="product-category">{data[0].category}</p>
        <p className="product-name">{data[0].name}</p>
        <StarReview />
        <p className="product-price">${data[1].results[0].original_price}</p>
      </>
    )
  } else {
    return (
      <>
        <p className="product-category">{data[0].category}</p>
        <p className="product-name">{data[0].name}</p>
        <StarReview />
        <p className="sale-price">${data[1].results[0].sale_price}</p>
        <p className="product-price strikethrough">${data[1].results[0].original_price}</p>
      </>
    )
  }
}

export default ProductDetail;