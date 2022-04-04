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
  };

  const recommendpercentage = (object) => {
    var truecount = 0;
    var falsecount = 0;

    for (let key in object) {
      if (key === 'true') {
        truecount += Number(object[key]);
      } else if (key === 'false'){
        falsecount += Number(object[key]);
      }
    }

    var result = truecount/(truecount + falsecount)*100;

    return result;
  };


  return(
    <div>
      <h4>RatingBreakdown</h4>
      <div>
        {calculaterating(metadata.ratings)}
      </div>
      <div>
        stars placeholder
      </div>
      <div>
        {/* {metadata.recommended['false']} */}
      </div>
      <div>
        {recommendpercentage(metadata.recommended)}% of reviews recommend this product
      </div>
    </div>
  )

};

export default RatingBreakdown;