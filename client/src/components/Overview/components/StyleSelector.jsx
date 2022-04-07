import React from 'react';
import './StyleSelector.css';

const StyleSelector = ({ index, style, handleClick }) => {
  return (
    <a href="#"
      key={index}
      onClick={handleClick}>
      <img
        className="style-circular-photo"
        src={style.photos[0].thumbnail_url}
        value={index}
      />
    </a>
  )
}

export default StyleSelector;