import React from 'react';

const ProductDetail = (props) => {

  return (
  <div>
    <small>CATEGORY</small>
    <h1>{props.styles.results[0].name}</h1>
    <p >{props.styles.results[0].original_price}</p>
  </div>
)}

export default ProductDetail;