import React from 'react';
import photo from '../../../../img/sgortz.png'
import './StyleSelector.css';

const StyleSelector = (props)=> {

  return (
  <div>
    <div className="clothing-style">STYLE > </div>
    <br/>
    <img className="style-circular-photo" src={photo} />
    <img className="style-circular-photo" src={photo} />
    <img className="style-circular-photo" src={photo} />
    <img className="style-circular-photo" src={photo} />
    <br/>
    <img className="style-circular-photo" src={photo} />
    <img className="style-circular-photo" src={photo} />
    <img className="style-circular-photo" src={photo} />
    <img className="style-circular-photo" src={photo} />
  </div>
)}
export default StyleSelector;