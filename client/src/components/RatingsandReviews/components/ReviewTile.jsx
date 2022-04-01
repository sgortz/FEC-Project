import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function ReviewTile ({review}) {

  return(
    <div className="reviewtile">
      <h4>ReviewTile</h4>
      <div>
        rating: {review.rating}
      </div>
      <div className="reviewnameanddate">
        {review.reviewer_name}, {moment(review.date).format('LL')}
      </div>
      <div className="reviewsummary">
        <strong>{review.summary.slice(0, 60)}</strong>
      </div>
      <div className="reviewbody">
        {review.body}
      </div>
      <div className="reviewphoto">
        reviewphotos
      </div>
      <div className="reviewrecommend">
        Recommend: {review.recommend}
        {/* {{review.recommend}? return(<div>I recommend  project</div>)} */}
      </div>
      <div className="sellerresponse">
        Response: {review.response}
      </div>
      <div className="reviewhelpful">
        Helpful? Yes: {review.helpfulness} | Report
      </div>

    </div>
  )

};

export default ReviewTile;