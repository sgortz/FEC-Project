import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/ProductBreakdown.css';


function ProductBreakdown ({metadata}) {
  const [size, setSize] = useState({display: false, value: 0});
  const [comfort, setComfort] = useState({display: false, value: 0});
  const [quality, setQuality] = useState({display: false, value: 0});
  const [width, setWidth] = useState({display: false, value: 0});
  const [length, setLength] = useState({display: false, value: 0});

  const setcharcateristics = () => {
    var sizechar = {display: false, value: 0};
    var comfortchar = {display: false, value: 0};
    var qualitychar = {display: false, value: 0};
    var widthchar = {display: false, value: 0};
    var lengthchar = {display: false, value: 0};

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
    }

    setSize(sizechar);
    setComfort(comfortchar);
    setQuality(qualitychar);
    setWidth(widthchar);
    setLength(lengthchar);
  };

  useEffect(()=>{
    setcharcateristics();
  }, [metadata]);


  return(
    <div>
      {size.display?
        <div className='productbreakdown'>
          <div className='maincharlabel'>Size</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${size.value}%`}}>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='leftlabel'>
              Too small
            </div>
            <div className='rightlabel'>
              Too large
            </div>
          </div>
        </div>
      :
      null
      }
      {comfort.display?
        <div className='productbreakdown'>
          <div className='maincharlabel'>Comfort</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${comfort.value}%`}}>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='leftlabel'>
              Poor
            </div>
            <div className='rightlabel'>
              Perfect
            </div>
          </div>
        </div>
      :
      null
      }
      {quality.display?
        <div className='productbreakdown'>
          <div className='maincharlabel'>Quality</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${quality.value}%`}}>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='leftlabel'>
              Poor
            </div>
            <div className='rightlabel'>
              Perfect
            </div>
          </div>
        </div>
      :
      null
      }
      {width.display?
        <div className='productbreakdown'>
          <div className='maincharlabel'>Width</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${width.value}%`}}>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='leftlabel'>
              Too short
            </div>
            <div className='rightlabel'>
              Too large
            </div>
          </div>
        </div>
      :
      null
      }
      {length.display?
        <div className='productbreakdown'>
          <div className='maincharlabel'>Length</div>
          <div className='productbarcontainer'>
            <div className='indicator' style={{width: `${length.value}%`}}>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className='productlabelscontainer'>
            <div className='leftlabel'>
              Too short
            </div>
            <div className='rightlabel'>
              Too long
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