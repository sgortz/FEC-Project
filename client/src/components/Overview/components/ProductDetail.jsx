import React from 'react';
import Star from '../../SharedComponents/Star.jsx';

const ProductDetail = ({ data, stylesIndex, avgReviewRating }) => {
  if (data.length === 0) {
    return null;
  } else if (data[1].results[stylesIndex].sale_price === null) {
    return (
      <>
        <p className="product-name">{data[0].name}</p>
        <Star value={avgReviewRating} />
        <p className="product-price">${data[1].results[stylesIndex].original_price}</p>
      </>
    )
  } else {
    return (
      <>
        <h2 className="product-name">{data[0].name}</h2>
        <Star value={avgReviewRating} />
        <p className="sale-price">${data[1].results[stylesIndex].sale_price}</p>
        <p className="product-price strikethrough">${data[1].results[stylesIndex].original_price}</p>
      </>
    )
  }
}

export default ProductDetail;