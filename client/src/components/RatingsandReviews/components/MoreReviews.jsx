import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoreReviews ({setReviewsrenderedcount, reviews}) {

  return(
    <div>
       <button id="morereviews" onClick={()=>
      {setReviewsrenderedcount({reviews}.length);}}>
        MORE REVIEWS
      </button>
      {/* <input type="button" id="morereviews" value="More Reviews" onClick={(e)=>{e.preventDefault();setReviewsrenderedcount({reviews}.length)}}/> */}
    </div>
  )

};

export default MoreReviews;