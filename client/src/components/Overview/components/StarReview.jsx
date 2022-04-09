import React from 'react';
import { Link } from 'react-scroll';
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import './StarReview.css'

const StarReview = () => (
  <div className="star-rating">
    <span>
    <BsStarFill />
    <BsStarFill />
    <BsStarFill />
    <BsStarHalf />
    <BsStar />

    </span>

<span></span><span></span><span></span>
    <Link activeClass="active" to='RatingsandReviews' spy={true} smooth={true}>
      <p className="link-to-review">    read all reviews</p>
    </Link>
  </div>
)

export default StarReview;