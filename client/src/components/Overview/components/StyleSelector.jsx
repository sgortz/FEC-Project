import React, { useState, useEffect } from 'react';

const StyleSelector = ({ index, style, handleClick }) => {
  const [photoOrientation, setPhotoOrientation] = useState('circular--portrait');

  const resizeImg = (img) => {

    if (img.height < img.width) {
      console.log('this image is landscape', img, img.height, img.width);
      // img.heigh = 64;
      setPhotoOrientation('circular--landscape');
    } else if (img.height > img.width) {
      console.log('this image is portrait', img, img.height, img.width);
      setPhotoOrientation('circular--portrait');
    } else if (img.height === img.width) {
      setPhotoOrientation('circular--square');
    }
  }


  return (
    <span className={photoOrientation}>
      <img
        className="circular-photo"
        src={style.photos[0].thumbnail_url}
        value={index}
        onLoad={(e) => { resizeImg(e.target) }}
        onClick={handleClick}
      />
    </span>
  )
}

export default StyleSelector;