import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddReview ({setReviewmodalshow}) {

  return(
    <div>
      <input type="button" id="addreview" value="Add A Review" onClick={(e)=>
      { e.preventDefault();
        setReviewmodalshow(true);}}/>
    </div>
  )

};

export default AddReview;