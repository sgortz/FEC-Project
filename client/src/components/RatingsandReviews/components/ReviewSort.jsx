import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/ReviewSort.css';

function ReviewSort ({reviews, setSortoption}) {

  return(
    <form className='ReviewSort'>
    <label className='ReviewSortLabel'>
    {reviews.length} reviews, sorted by
      <select id="reviewsortdropdown" onChange={(e)=>setSortoption(e.target.value)}>
        <option value="relevant">relevant</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </label>
  </form>
  )

};

export default ReviewSort;