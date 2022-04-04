import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/RatingBreakdown.css';


function RatingBreakdown ({metadata}) {

  const calculaterating = (object) => {

    var sumrating = 0;
    var countrating = 0;

    for (let key in object) {
      sumrating += Number(key) * Number(object[key]);
      countrating += Number(object[key]);
    }

    var result = sumrating/countrating;
    return result.toFixed(1);
  }


  return(
    <div>
      <h4>RatingBreakdown</h4>
      <div>
        {calculaterating(metadata.ratings)}
      </div>
    </div>
  )

};

export default RatingBreakdown;