import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddReview ({setReviewmodalshow}) {

  return(
    <div>
      <button id="addreview" onClick={()=>
      {setReviewmodalshow(true);}}>
        ADD A REVIEW
      </button>
      {/* <input type="button" id="addreview" value="ADD A REVIEW" onClick={(e)=>
      { e.preventDefault();
        setReviewmodalshow(true);}}/> */}
    </div>
  )

};

export default AddReview;