import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import '../styling/StarRating.css';


function StarRating ({rating, setRating}) {
  const [hover, setHover] = useState(null);

  return (
    <span className='starrating'>
      {
      [...Array(5)].map((star, index) =>{
        const ratingValue = index + 1;
        return(
          <label key={index}>
            <input id="starratingradio" type='radio' name='rating' value={ratingValue}
            onClick={(e)=>{
              e.preventDefault;
              setRating(ratingValue);
            }}

            />
            <FaStar className='ratingstar' size={19}
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseEnter={()=>setHover(ratingValue)}
            onMouseLeave={()=>setHover(null)}
            />
          </label>
        );
      })
      }

    </span>


  )

};


export default StarRating;