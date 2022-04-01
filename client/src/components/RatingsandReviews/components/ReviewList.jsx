import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

function ReviewList ({reviews, setReview, reviewsrenderedcount}) {

  return(
    <div>
      <h3>ReviewList</h3>
      <div>

        {reviews.slice(0, reviewsrenderedcount).map((review, index)=>
          <ReviewTile review={review} key={index}/>
        )}

      </div>


    </div>
  )

};

export default ReviewList;