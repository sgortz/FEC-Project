import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';


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
      console.log('successfully get review metadata')
    })
    .catch((err)=>{console.log(err)});
  },[props.product_id]);
  //will need to put something inside [] above, eg. whenever a new review is submitted

  // console.log('metadata is', metadata);

  return(
    <div>
      <h3>ReviewMetaData</h3>
      <RatingBreakdown metadata = {metadata}/>
      <ProductBreakdown metadata = {metadata}/>
    </div>
  )

};

export default ReviewMetaData;