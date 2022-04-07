import React from 'react';
import './VerticalThumbnails.css';

const VerticalThumbnails = ({ photos, currentPhoto }) => {
  photos.map((thumbnail, index) => {
    return (<li className="thumbnail-list" key={index}>
      <img src={thumbnail.thumbnail_url} alt="thumbnail" className={index === currentPhoto ? "current-thumbnail thumbnail " : "thumbnail"} />
    </li>)
  })

}

export default VerticalThumbnails;