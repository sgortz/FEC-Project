import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

function ReviewList ({review, setReview}) {

  return(
    <div>
      <h3>ReviewList</h3>
      <ReviewTile/>
    </div>
  )

};

export default ReviewList;