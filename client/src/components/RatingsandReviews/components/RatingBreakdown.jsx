import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../styling/RatingBreakdown.css';


function RatingBreakdown ({metadata}) {

  const calculaterating = (object) => {

    var allratings = object;
    var sumrating = 0;
    var countrating = 0;

    // for (key in {metadata.ratings}) {
    //   sumrating += key * metadata.ratings[key];
    //   countrating += metadata.ratings[key];
    // }
    Object.keys(allratings).forEach(key=>{
      sumrating += Number(key) * allratings[key];
      countrating += allratings[key];
    });

    return sumrating/countrating;
    // console.log(metadata);
    // console.log(object);


  }

  const averageRating = (obj) => {
    let wholeTotal = 0;
    let responseTotal = 0;
    for (const star in obj) {
      wholeTotal += (Number(obj[star]) * Number(star));
      responseTotal += Number(obj[star]);
    }
    const result = wholeTotal / responseTotal;
    if (isNaN((Math.round(result * 4) / 4).toFixed(1))) {
      return 0;
    }
    return result;
  };

  // const [rating, setRating] = useState(null);

  // useEffect(()=>{
  //   // setRating(metadata.ratings);
  //   // setRating(calculaterating(metadata));
  //   function testingstatetransfer () {
  //     setRating(metadata)
  //   };
  //   testingstatetransfer();
  //   setRating(metadata);
  // });

  return(
    <div>
      <h4>RatingBreakdown</h4>
      <div>
        {/* {averageRating({metadata}).toFixed(1)} */}
        {calculaterating({metadata})}
      </div>

      {/* <div>{metadata}</div> */}
      {/* <div>
        {calculaterating({metadata})}
      </div> */}
    </div>
  )

};

export default RatingBreakdown;