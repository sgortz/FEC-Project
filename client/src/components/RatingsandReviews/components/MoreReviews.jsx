import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoreReviews ({reviewsrendered, setReviewsrendered}) {

  return(
    <div>
      <input type="button" id="morereviews" value="More Reviews" onClick={()=>{setReviewsrendered(reviewsrendered + 2)}}/>
    </div>
  )

};

export default MoreReviews;