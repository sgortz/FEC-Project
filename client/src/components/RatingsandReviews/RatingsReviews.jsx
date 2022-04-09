import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewMetaData from './components/ReviewMetaData.jsx';
import ReviewSort from './components/ReviewSort.jsx';
import ReviewList from './components/ReviewList.jsx';
import MoreReviews from './components/MoreReviews.jsx';
import AddReview from './components/AddReview.jsx';
import ReviewModal from './components/ReviewModal.jsx';
import './RatingsReviews.css'


function RatingsAndReviews (props) {

  const [reviews, setReviews] = useState([]);
  const [reviewsrenderedcount, setReviewsrenderedcount] = useState(2);
  const [sortoption, setSortoption] = useState('relevant');
  const [selectedstars, setSelectedstars] = useState([]);
  const [reviewmodalshow, setReviewmodalshow] = useState(false);
  const [productChars, setProductChars] = useState({'hello': 1});

  useEffect (() => {
    axios.get('/reviews',
          {
            params: {
              product_id : props.product_id,
              page : 1,
              count : 100,
              sort : `${sortoption}`
            }
          }
        )
    .then((results)=>{
      setReviews(results.data.results);
      props.setReviewLength(results.data.results.length);
    })
    .catch((err)=>{console.log(err)});
  }, [sortoption, props.product_id]);

  const [filteredreview, setFilteredreview] = useState([]);

  useEffect(()=>{
    setFilteredreview(reviews.filter(review => selectedstars.indexOf(review.rating) !== -1));
  }, [selectedstars]);

  return(
    <div className='RRContainer'>
      <h2 id='RatingsandReviews'>RATINGS & REVIEWS</h2>
      <ReviewMetaData product_id={props.product_id} selectedstars={selectedstars} setSelectedstars={setSelectedstars} setReviewsrenderedcount={setReviewsrenderedcount}
      setProductChars={setProductChars} setAvgReviewRating={props.setAvgReviewRating}/>

      <ReviewSort reviews={reviews} setSortoption={setSortoption}/>

      <ReviewList reviews={reviews} setReviews={setReviews} reviewsrenderedcount={reviewsrenderedcount} selectedstars={selectedstars} filteredreview={filteredreview}/>

      <div className='ReviewButtons'>
      <AddReview setReviewmodalshow={setReviewmodalshow}/>

        {reviewsrenderedcount < reviews.length && filteredreview.length === 0?
        <MoreReviews reviewsrenderedcount={reviewsrenderedcount} setReviewsrenderedcount={setReviewsrenderedcount}/>
        :
        reviewsrenderedcount < filteredreview.length && filteredreview.length !== 0?
        <MoreReviews
        reviews={reviews}
        setReviewsrenderedcount={setReviewsrenderedcount}/>
        : null}


        { reviewmodalshow
          ?
          <ReviewModal
          product_id={props.product_id}
          productName={props.productName}
          productChars={productChars}
          setReviewmodalshow={setReviewmodalshow}
          setReviews={setReviews}/>
          :
          null
        }
      </div>

    </div>
  )
}

export default RatingsAndReviews;


