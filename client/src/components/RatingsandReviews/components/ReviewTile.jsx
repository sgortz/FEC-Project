import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewTile ({review}) {

  return(
    <div>
      <h4>ReviewTile</h4>
      rating: {review.rating}
      {review.reviewer_name}
      {review.date}
      <br></br>
      {review.summary}
      <br></br>
      {review.body}
      <br></br>
      <div>
        Recommend: {review.recommend}
        {/* {{review.recommend}? return(<div>I recommend  project</div>)} */}
      </div>
      <br></br>
      <div>
        Response: {review.response}
      </div>
      <br></br>
      <div>
        Helpful? Yes: {review.helpfulness} | Report
      </div>

    </div>
  )

};

export default ReviewTile;