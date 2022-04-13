import React from './react';
import { BsStar, BsStarFill } from "react-icons/bs";

const toggleStar = (e) => {
  e.preventDefault();
  if (star === 0) {
    setStar(1);
  } else {
    setStar(0);
  }
}

const StarButton = () => {
  return (
    <div>
      <button className={star === 0 ? "starred" : "starred hidden"} onClick={toggleStar}>
        <BsStar />
      </button>
      <button className={star === 1 ? "starred" : "starred hidden"} onClick={toggleStar}>
        <BsStarFill />
      </button>
    </div>
  )
}

export default StarButton;