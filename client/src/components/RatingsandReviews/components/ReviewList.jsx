import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

function ReviewList ({reviews, setReview, reviewsrenderedcount, selectedstars, filteredreview}) {

  return(
    <div>
      <h3>ReviewList</h3>
      {selectedstars.length !== 0 ?
        <div>
          {filteredreview.slice(0, reviewsrenderedcount).map((review, index)=>
            <ReviewTile review={review} key={index} reviews={reviews}/>
          )}
        </div>
        :
        <div>
        {reviews.slice(0, reviewsrenderedcount).map((review, index)=>
          <ReviewTile review={review} key={index} reviews={reviews}/>
        )}
      </div>
      }
    </div>
  )

};

export default ReviewList;