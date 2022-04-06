import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/ProductBreakdown.css';
import {VscTriangleDown} from "react-icons/vsc"

function ProductBreakdown ({metadata}) {
  const [size, setSize] = useState({display: false, value: 0});
  const [comfort, setComfort] = useState({display: false, value: 0});
  const [quality, setQuality] = useState({display: false, value: 0});
  const [width, setWidth] = useState({display: false, value: 0});
  const [length, setLength] = useState({display: false, value: 0});
  const [fit, setFit] = useState({display: false, value: 0});


  const setcharcateristics = () => {
    var sizechar = {display: false, value: 0};
    var comfortchar = {display: false, value: 0};
    var qualitychar = {display: false, value: 0};
    var widthchar = {display: false, value: 0};
    var lengthchar = {display: false, value: 0};
    var fitchar = {display: false, value: 0};


    var allchars = metadata.characteristics;

    if (allchars) {
      if (allchars.Size) {
        sizechar = {display: true, value: Number(allchars.Size.value)/5 * 100}
      }
      if (allchars.Comfort) {
        comfortchar = {display: true, value: Number(allchars.Comfort.value)/5 * 100}
      }
      if (allchars.Quality) {
        qualitychar = {display: true, value: Number(allchars.Quality.value)/5 * 100}
      }
      if (allchars.Width) {
        widthchar = {display: true, value: Number(allchars.Width.value)/5 * 100}
      }
      if (allchars.Length) {
        lengthchar = {display: true, value: Number(allchars.Length.value)/5 * 100}
      }
      if (allchars.Fit) {
        fitchar = {display: true, value: Number(allchars.Fit.value)/5 * 100}
      }
    }

    setSize(sizechar);
    setComfort(comfortchar);
    setQuality(qualitychar);
    setWidth(widthchar);
    setLength(lengthchar);
    setFit(fitchar);

  };

  useEffect(()=>{
    setcharcateristics();
  }, [metadata]);


  return(
    <div>
      {size.display?
        <div className='review-productbreakdown'>
          <div className='review-maincharlabel'>Size</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${size.value}%`}}>
              <VscTriangleDown />
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='reviewchar-leftlabel'>
              Too small
            </div>
            <div className='reviewchar-rightlabel'>
              Too large
            </div>
          </div>
        </div>
      :
      null
      }
      {comfort.display?
        <div className='review-productbreakdown'>
          <div className='review-maincharlabel'>Comfort</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${comfort.value}%`}}>
              <VscTriangleDown />
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='reviewchar-leftlabel'>
              Uncomfortable
            </div>
            <div className='reviewchar-rightlabel'>
              Perfect
            </div>
          </div>
        </div>
      :
      null
      }
      {quality.display?
        <div className='review-productbreakdown'>
          <div className='review-maincharlabel'>Quality</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${quality.value}%`}}>
              <VscTriangleDown />
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='reviewchar-leftlabel'>
              Poor
            </div>
            <div className='reviewchar-rightlabel'>
              Perfect
            </div>
          </div>
        </div>
      :
      null
      }
      {width.display?
        <div className='review-productbreakdown'>
          <div className='review-maincharlabel'>Width</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${width.value}%`}}>
              <VscTriangleDown />
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='reviewchar-leftlabel'>
              Too narrow
            </div>
            <div className='reviewchar-rightlabel'>
              Too wide
            </div>
          </div>
        </div>
      :
      null
      }
      {length.display?
        <div className='review-productbreakdown'>
          <div className='review-maincharlabel'>Length</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${length.value}%`}}>
              <VscTriangleDown />
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='reviewchar-leftlabel'>
              Runs short
            </div>
            <div className='reviewchar-rightlabel'>
              Runs long
            </div>
          </div>
        </div>
      :
      null
      }
      {fit.display?
        <div className='review-productbreakdown'>
          <div className='review-maincharlabel'>Fit</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${fit.value}%`}}>
              <VscTriangleDown />
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='reviewchar-leftlabel'>
              Runs tight
            </div>
            <div className='reviewchar-rightlabel'>
              Runs long
            </div>
          </div>
        </div>
      :
      null
      }
    </div>
  )

};

export default ProductBreakdown;