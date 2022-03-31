import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMetaData from './components/ReviewMetaData.jsx'
import ReviewSort from './components/ReviewSort.jsx'
import ReviewList from './components/ReviewList.jsx'
import MoreReviews from './components/MoreReviews.jsx'
import AddReview from './components/AddReview.jsx'


function RatingsAndReviews (props) {

  const [review, setReview] = useState(null);
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
    .then((reviews)=>{
      setReview(reviews.results);
      console.log('successfully get all reviews')
    })
    .catch((err)=>{console.log(err)});
  }, [sortoption]);



  // const sortHandler = () => {
  //   switch (sortoption) {
  //     case 'helpful':

  //       break;
  //     case 'newest' :
  //       setReview();
  //       break;
  //     default:
  //       setReview();
  //   }
  // };




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