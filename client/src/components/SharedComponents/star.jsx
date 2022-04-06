import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import './star.css';


function Star (props) {

  const [calculatedStar, setCalculatedStar] = useState(0);

  const calculatestar = () => {
    var width = 0;
    let whole = Math.floor(props.value);
    let residue = props.value-whole;

    width += whole * 20;

    if (residue >= 0.25 && residue < 0.50) {
      width += 5;
    } else if (residue >= 0.50 && residue < 0.75) {
      width += 10;
    } else if (residue >= 0.75 && residue < 1) {
      width += 15;
    }

    return(width);
  }

  useEffect(()=>{
    setCalculatedStar(calculatestar());
  }, [props.value]);

  return (
    <div className='allstars' >
      <div className='back-stars'>
        {
        [...Array(5)].map((star, index)=><FaStar key={index} aria-hidden='true' size={20}/>)
        }

        <div className='front-stars' style={{width: `${calculatedStar}%`}}>
          {
          [...Array(5)].map((star, index)=><FaStar key={index} aria-hidden='true' size={20}/>)
          }

        </div>

      </div>



    </div>

  )

};

export default Star;

// style={{width: `${calculatedStar}%`}}