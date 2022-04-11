import React, { useState, useEffect } from 'react';

const StyleSelector = ({ index, style, handleClick }) => {
  const [photoOrientation, setPhotoOrientation] = useState('circular--portrait');

  const resizeImg = (img) => {
    if (img.height === img.width) {
      setPhotoOrientation('circular--square');
    } else if (img.height > img.width) {
      setPhotoOrientation('circular--portrait');
    } else if (img.height < img.width) {
      setPhotoOrientation('circular--landscape');
    }
  }


  return (
    <div className="circular-photo">
      <img
        className={photoOrientation}
        src={style.photos[0].thumbnail_url}
        value={index}
        onLoad={(e) => { resizeImg(e.target) }}
        onClick={(e) => {
          e.preventDefault();
          handleClick(e.target.attributes[2].value);
        }}
      />
    </div>
  )
}

export default StyleSelector;