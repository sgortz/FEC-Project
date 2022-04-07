import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import '../styling/ReviewMeta.css'


function ReviewMetaData (props) {
  const [metadata, setMetadata] = useState({});

  useEffect (() => {
    axios.get('/reviews/meta',
      {
        params: {
          product_id : props.product_id,
        }
      }
    )
    .then((results)=>{
      setMetadata(results.data);
      props.setProductChars(results.data.characteristics)
    })
    .catch((err)=>{console.log(err)});
  },[props.product_id]);


  return(
    <div className='ReviewMeta'>
      <RatingBreakdown metadata = {metadata} selectedstars={props.selectedstars} setSelectedstars={props.setSelectedstars} setReviewsrenderedcount={props.setReviewsrenderedcount} setAvgReviewRating={props.setAvgReviewRating}/>
      <ProductBreakdown metadata = {metadata}/>
    </div>
  )

};

export default ReviewMetaData;