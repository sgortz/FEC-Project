import React from 'react';
import { Link } from 'react-scroll';
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import Star from '../../SharedComponents/star.jsx';
import './StarReview.css'

const StarReview = ({ avgReviewRating }) => {
  if (avgReviewRating === 0 || avgReviewRating === undefined) {
    return null;
  } else {
    return (
      <div className="star-rating">
        <span>
          <Star value={avgReviewRating} />
        </span>
        <Link activeClass="active" to='RatingsandReviews' spy={true} smooth={true}>
          <p className="link-to-review">read all reviews</p>
        </Link>
      </div>
    )
  }
}

export default StarReview;