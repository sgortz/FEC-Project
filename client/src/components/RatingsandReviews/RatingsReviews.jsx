import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMetaData from './components/ReviewMetaData.jsx'
import ReviewSort from './components/ReviewSort.jsx'
import ReviewList from './components/ReviewList.jsx'
import MoreReviews from './components/MoreReviews.jsx'
import AddReview from './components/AddReview.jsx'


function RatingsAndReviews (props) {
  return(
    <div>
      <h1>Ratings And Reviews</h1>
      <ReviewMetaData/>
      <ReviewSort/>
      <ReviewList/>
      <MoreReviews/>
      <AddReview/>
    </div>
  )
}

export default RatingsAndReviews;