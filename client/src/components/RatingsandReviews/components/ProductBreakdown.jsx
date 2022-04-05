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
        sizechar = {display: true, value: Number(allchars.Size.value)}
      }
      if (allchars.Comfort) {
        comfortchar = {display: true, value: Number(allchars.Comfort.value)}
      }
      if (allchars.Quality) {
        qualitychar = {display: true, value: Number(allchars.Quality.value)}
      }
      if (allchars.Width) {
        widthchar = {display: true, value: Number(allchars.Width.value)}
      }
      if (allchars.Length) {
        lengthchar = {display: true, value: Number(allchars.Length.value)}
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
      <h4>ProductBreakdown</h4>
      <div>

      </div>
    </div>
  )

};

export default ProductBreakdown;