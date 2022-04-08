import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoreReviews ({setReviewsrenderedcount, reviews}) {

  return(
    <div>
      <input type="button" id="morereviews" value="More Reviews" onClick={(e)=>{e.preventDefault();setReviewsrenderedcount({reviews}.length)}}/>
    </div>
  )

};

export default MoreReviews;