import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewSort ({reviews, setSortoption}) {

  return(
    <form >
    <label>
    {reviews.length} reviews, sorted by
      <select onChange={(e)=>setSortoption(e.target.value)}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </label>
  </form>
  )

};

export default ReviewSort;