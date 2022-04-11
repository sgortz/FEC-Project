import React, { useState, useEffect } from 'react';


const RelatedProductCard = ({ setProduct_id, relatedProductData, reviewData, product, setProductName }) => {

  const { id, category, photos, name, default_price, sale_price } = product;


  const handleRelatedCardClick = () => {
    setProduct_id(id);
    setProductName(name)
  }

  return (

        <div className='RPcard' onClick={handleRelatedCardClick}>
          <img className='RPcard-image' alt='related-card' src={(!photos[0].thumbnail_url) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' : photos[0].thumbnail_url}></img>
          <div className="RPcard__content">
            <div className="card__header-text">
              <h3 className="RPcategory">{category.toUpperCase()}</h3>
              <span className="RPname">{name}</span>
            </div>
              {sale_price ?
              <div className='RPprice'>
                <p style={{ color: 'red' }}>${sale_price}</p>
                <p style={{ textDecoration: 'line-through' }}>${default_price}</p>
              </div>
              : <span className='RPprice'>${default_price}</span> }
           </div>
        </div>

  )
}



export default RelatedProductCard;