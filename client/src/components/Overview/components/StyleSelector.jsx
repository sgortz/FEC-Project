import React from 'react';
import photo from '../../../../img/sgortz.png'
import './StyleSelector.css';

const StyleSelector = (props)=> {

  return (
  <div>
    <strong>STYLE > </strong>
    <br/>
    <img className="sgortz" src={photo} />
    <img className="sgortz" src={photo} />
    <img className="sgortz" src={photo} />
    <img className="sgortz" src={photo} />
    <br/>
    <img className="sgortz" src={photo} />
    <img className="sgortz" src={photo} />
    <img className="sgortz" src={photo} />
    <img className="sgortz" src={photo} />
  </div>
)}
export default StyleSelector;