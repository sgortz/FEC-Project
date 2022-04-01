import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function ReviewTile ({review}) {

  const [reviewbody, setReviewbody] = useState(review.body.slice(0, 250));
  const [showmore, setShowmore] = useState('show more');
  const [reviewhelpful, setReviewhelpful] = useState(review.helpfulness);
  const [reviewreport, setReviewreport] = useState('Report');
  const [helpfulreportclicked, setHelpfulreportclicked] = useState(false);

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
      {review.body.length < 250 ?
        <div className="reviewbody">
          {reviewbody}
        </div>
        :
        <div className="reviewbody">
          {reviewbody}
          <br></br>
          <a onClick={()=> {setReviewbody(review.body); setShowmore(null)}}>{showmore}</a>
        </div>
      }

      <div className="reviewphoto">
        review images placeholder
      </div>
      {review.recommend === true ?
        <div className="reviewrecommend">✓ I recommend this product</div> : null
      }
      {review.response !== null?
        <div className="sellerresponse"><strong>Response:</strong> <br></br>{review.response}</div> : null
      }
      {helpfulreportclicked === false ?
        <div className="reviewhelpfulreport">
          Helpful?
          Yes:({reviewhelpful})  |  {reviewreport}
        </div>
        :
        null


      }

    </div>
  )

};

export default ReviewTile;