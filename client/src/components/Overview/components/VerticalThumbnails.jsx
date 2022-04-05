import React from 'react';
import './VerticalThumbnails.css';

const VerticalThumbnails = ({ photos, currentPhoto }) => {
  // console.log(photos)
  return (
    <ul>
      {photos.map((thumbnail, index) => {
        return (<li className="thumbnail-list">
          <img src={thumbnail.thumbnail_url} alt="thumbnail" className={index === currentPhoto ? "current-thumbnail thumbnail " : "thumbnail"}/>
        </li>)
      })}
    </ul>
  )
}

export default VerticalThumbnails;