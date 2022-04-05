import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function ReviewTile ({review, reviews}) {

  const [reviewbody, setReviewbody] = useState(review.body.slice(0, 250));
  const [showmore, setShowmore] = useState('show more');
  const [reviewhelpful, setReviewhelpful] = useState(review.helpfulness);
  const [reviewreport, setReviewreport] = useState('Report');
  const [helpfulreportclicked, setHelpfulreportclicked] = useState(false);

  useEffect(()=>{
    setReviewbody(review.body.slice(0, 250));
    setShowmore('show more');
    setReviewhelpful(review.helpfulness);
    setReviewreport('Report');
    setHelpfulreportclicked(false);
  }, [reviews]);

  const reportReview = () =>{
    axios.put(`/reviews/${review.review_id}/report`)
    .then(()=>{
      setReviewreport('You\'ve reported this review');
      console.log('successfully reported this review')
    })
    .catch((err)=>{console.log(err)});

    setHelpfulreportclicked(true);
  };

  const markHelpful = () => {
    axios.put(`/reviews/${review.review_id}/helpful`)
    .then(()=>{
      setReviewhelpful(review.helpfulness + 1);
      console.log('successfully add one to review helpfulness')
    })
    .catch((err)=>{console.log(err)});
    setHelpfulreportclicked(true);
  };

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
          <u onClick={()=> {setReviewbody(review.body); setShowmore(null)}}>{showmore}</u>
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
      { helpfulreportclicked === false && reviewreport === 'Report' ?
        <div className="reviewhelpfulreport">
          Helpful?
          <u onClick={markHelpful}> Yes:({reviewhelpful})</u>  |  <u onClick={reportReview}>{reviewreport}</u>
        </div>
        :
        helpfulreportclicked === true && reviewreport === 'You\'ve reported this review' ?
        <div className="reviewhelpfulreport">
          {reviewreport}
        </div>
        :
        helpfulreportclicked === true && reviewreport === 'Report' ?
        <div className="reviewhelpfulreport">
          Helpful? Yes:({reviewhelpful})  |  {reviewreport}
        </div>
        :
        null

      }


    </div>
  )

};

export default ReviewTile;