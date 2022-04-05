import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import './StarReview.css'

const StarReview = () => (
  <div className="star-rating">
    <BsStarFill />
    <BsStarFill />
    <BsStarFill />
    <BsStarHalf />
    <BsStar />
    <span>    </span>

      <a href='#' className="link-to-review">   read all reviews</a>

  </div>
)

export default StarReview;