import React, { useState, useEffect } from 'react';

const StyleSelector = ({ index, style, handleClick }) => {
  const [photoOrientation, setPhotoOrientation] = useState('circular--portrait');

  const resizeImg = (img) => {
    if (img.height === img.width) {
      console.log('this is a square image')
      setPhotoOrientation('circular--square');
    } else if (img.height > img.width) {
      console.log('this image is portrait', img.height, img.width);
      setPhotoOrientation('circular--portrait');
    } else if (img.height < img.width) {
      console.log('this image is landscape', img.height, img.width);
      // img.heigh = 64;
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
        onClick={handleClick}
      />
    </div>
  )
}

export default StyleSelector;