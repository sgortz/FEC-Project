import React, { useState, useEffect } from 'react';


const RelatedProductCard = ({ setProduct_id, relatedProductData, reviewData, product }) => {

  const { id, category, photo, name, default_price, sale_price } = product;


  const handleRelatedCardClick = () => {
    setProduct_id(id);
  }

  return (

    <div>
      <div className='card-container' onClick={handleRelatedCardClick}>
        <div className='card-item'>
          <img loading='lazy' className='card-image' alt='related-card' src={photo}></img>
        </div>
        <div className="carousel-slide-item__body">

          <div className='card-item text category'>{category.toUpperCase()}</div>
          <div className='card-item text name'>{name}</div>
          {sale_price ?
            <div className='card-item text price'>
              <p style={{ color: 'red' }}>${sale_price}</p>
              <p style={{ textDecoration: 'line-through' }}>${default_price}</p>
            </div>
            : <div className='card-item text'>${default_price}</div>
          }
        </div>
        <div className='card-item text rating'>

        </div>
      </div>
    </div>



  )
}



export default RelatedProductCard;