import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function ReviewTile ({review}) {

  return(
    <div>
      <h4>ReviewTile</h4>
      <div>
        rating: {review.rating}
      </div>
      <div>
        {review.reviewer_name}, {moment(review.date).format('LL')}
      </div>

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