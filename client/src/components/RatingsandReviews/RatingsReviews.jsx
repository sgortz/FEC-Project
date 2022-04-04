import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMetaData from './components/ReviewMetaData.jsx'
import ReviewSort from './components/ReviewSort.jsx'
import ReviewList from './components/ReviewList.jsx'
import MoreReviews from './components/MoreReviews.jsx'
import AddReview from './components/AddReview.jsx'


function RatingsAndReviews (props) {

  const [reviews, setReviews] = useState([]);
  const [reviewsrenderedcount, setReviewsrenderedcount] = useState(2);
  const [sortoption, setSortoption] = useState('relevant');
  const [metadata, setMetadata] = useState(null);

  useEffect (() => {
    axios.get('/reviews',
          {
            params: {
              product_id : 37315,
              page : 1,
              count : 20,
              sort : `${sortoption}`
            }
          }
        )
    // axios.get(`/reviews/?product_id=37315&page=1&count=500&sort=relevant`)
    .then((results)=>{
      setReviews(results.data.results)
      // console.log('successfully get all reviews')
    })
    .catch((err)=>{console.log(err)});
  }, [sortoption]);

  useEffect (() => {
    axios.get('/reviews/meta',
          {
            params: {
              product_id : 37315,
            }
          }
        )
    .then((results)=>{
      setMetadata(results.data);
      // console.log('successfully get review metadata')
    })
    .catch((err)=>{console.log(err)});
  },[]);
  //will need to put something inside [] above, eg. whenever a new review is submitted





//if reviewsrenderedcount === reviews.length, hide MoreReviews Button/Component


  return(
    <div>
      <h1>Ratings And Reviews</h1>
      <ReviewMetaData/>
      <ReviewSort reviews={reviews} setSortoption={setSortoption}/>
      <ReviewList reviews={reviews} setReviews={setReviews} reviewsrenderedcount={reviewsrenderedcount}/>
      {reviewsrenderedcount !== reviews.length? <MoreReviews reviewsrenderedcount={reviewsrenderedcount} setReviewsrenderedcount={setReviewsrenderedcount}/> : null}
      <AddReview/>
    </div>
  )
}

export default RatingsAndReviews;