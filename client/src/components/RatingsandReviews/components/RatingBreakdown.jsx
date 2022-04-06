import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Star from '../../SharedComponents/Star.jsx';
import '../styling/RatingBreakdown.css';


function RatingBreakdown ({metadata, selectedstars, setSelectedstars,  setReviewsrenderedcount}) {

  const [totalcounts, setTotalcounts] = useState(null);

  const [onestar, setOnestar] = useState({count: 0, width: 0});
  const [twostar, setTwostar] = useState({count: 0, width: 0});
  const [threestar, setThreestar] = useState({count: 0, width: 0});
  const [fourstar, setFourstar] = useState({count: 0, width: 0});
  const [fivestar, setFivestar] = useState({count: 0, width: 0});


  const calculaterating = (object) => {
    var sumrating = 0;
    var countrating = 0;
    for (let key in object) {
      sumrating += Number(key) * Number(object[key]);
      countrating += Number(object[key]);
    }
    var ratingresult = sumrating/countrating;
    return ratingresult;
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
    var percentageresult = truecount/(truecount + falsecount)*100;
    return percentageresult.toFixed(1);
  };

  const starscountandwidth = () => {
    var onestarcount;
    var twostarcount;
    var threestarcount;
    var fourstarcount;
    var fivestarcount;
    var totalstarcounts = 0;

    var allratings = metadata.ratings;

    for (let key in allratings) {
      if (key === '1') {
        onestarcount = Number(allratings[key]);
        totalstarcounts += Number(onestarcount);
      } else if (key === '2') {
        twostarcount = Number(allratings[key]);
        totalstarcounts += Number(twostarcount);
      } else if (key === '3') {
        threestarcount = Number(allratings[key]);
        totalstarcounts += Number(threestarcount);
      } else if (key === '4') {
        fourstarcount = Number(allratings[key]);
        totalstarcounts += Number(fourstarcount);
      } else if (key === '5') {
        fivestarcount = Number(allratings[key]);
        totalstarcounts += Number(fivestarcount);
      }
    }

    setTotalcounts(totalstarcounts);
    setOnestar({count: onestarcount, width: onestarcount/totalstarcounts * 100});
    setTwostar({count: twostarcount, width: twostarcount/totalstarcounts * 100});
    setThreestar({count: threestarcount, width: threestarcount/totalstarcounts * 100});
    setFourstar({count: fourstarcount, width: fourstarcount/totalstarcounts * 100});
    setFivestar({count: fivestarcount, width: fivestarcount/totalstarcounts * 100});
  };

  const applyfilter = (e, star) => {
    e.preventDefault();
    let newselectedstars = [...selectedstars];
    if (newselectedstars.indexOf(star) === -1) {
      newselectedstars.push(star);
    } else {
      newselectedstars.splice(newselectedstars.indexOf(star), 1);
    }
    setSelectedstars(newselectedstars);
    setReviewsrenderedcount(2);
  };

  useEffect(()=>{
    starscountandwidth();
  }, [metadata]);



  return(
    <div>
      <h4>RatingBreakdown</h4>
      <div>
        <h2>
          {calculaterating(metadata.ratings).toFixed(1)}
        </h2>
        <Star value={calculaterating(metadata.ratings)}/>
      </div>

      <div>
        {recommendpercentage(metadata.recommended)}% of reviews recommend this product
      </div>
      <br></br>
      <div className='ratingbreakdownrow' onClick={(e) => applyfilter(e, 5)}>
        <div className="ratingbreakdown rbdleft">
          <div>5 star</div>
        </div>
        <div className='ratingbreakdown rbdmiddle'>
          <div className='ratingbarcontainer'>
            <div className='greenbar' style={{width: `${fivestar.width}%`}}></div>
          </div>
        </div>
        <div className='ratingbreakdown rbdright'>
          <div>{fivestar.count}</div>
        </div>
      </div>

      <div className='ratingbreakdownrow' onClick={(e) => applyfilter(e, 4)}>
        <div className="ratingbreakdown rbdleft">
          <div>4 star</div>
        </div>
        <div className='ratingbreakdown rbdmiddle'>
          <div className='ratingbarcontainer'>
            <div className='greenbar' style={{width: `${fourstar.width}%`}}></div>
          </div>
        </div>
        <div className='ratingbreakdown rbdright'>
          <div>{fourstar.count}</div>
        </div>
      </div>

      <div className='ratingbreakdownrow' onClick={(e) => applyfilter(e, 3)}>
        <div className="ratingbreakdown rbdleft">
          <div>3 star</div>
        </div>
        <div className='ratingbreakdown rbdmiddle'>
          <div className='ratingbarcontainer'>
            <div className='greenbar' style={{width: `${threestar.width}%`}}></div>
          </div>
        </div>
        <div className='ratingbreakdown rbdright'>
          <div>{threestar.count}</div>
        </div>
      </div>

      <div className='ratingbreakdownrow' onClick={(e) => applyfilter(e, 2)}>
        <div className="ratingbreakdown rbdleft">
          <div>2 star</div>
        </div>
        <div className='ratingbreakdown rbdmiddle'>
          <div className='ratingbarcontainer'>
            <div className='greenbar' style={{width: `${twostar.width}%`}}></div>
          </div>
        </div>
        <div className='ratingbreakdown rbdright'>
          <div>{twostar.count}</div>
        </div>
      </div>

      <div className='ratingbreakdownrow' onClick={(e) => applyfilter(e, 1)}>
        <div className="ratingbreakdown rbdleft">
          <div>1 star</div>
        </div>
        <div className='ratingbreakdown rbdmiddle'>
          <div className='ratingbarcontainer'>
            <div className='greenbar' style={{width: `${onestar.width}%`}}></div>
          </div>
        </div>
        <div className='ratingbreakdown rbdright'>
          <div>{onestar.count}</div>
        </div>
      </div>

      {selectedstars.length === 0 ?
        null
        :
        <div>
          Star filters currently applied: {JSON.stringify(selectedstars.sort())}
          <br></br>
          <u onClick={()=>{setSelectedstars([])}}>Remove all filters</u>
        </div>
      }

    </div>
  )

};

export default RatingBreakdown;