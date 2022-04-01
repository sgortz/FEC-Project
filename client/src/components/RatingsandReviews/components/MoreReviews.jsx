import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoreReviews ({reviewsrenderedcount, setReviewsrenderedcount}) {

  return(
    <div>
      <input type="button" id="morereviews" value="More Reviews" onClick={()=>{setReviewsrenderedcount(reviewsrenderedcount + 2)}}/>
    </div>
  )

};

export default MoreReviews;