import React from 'react';

const VerticalThumbnails = ({ photos, currentPhoto }) => {
  return (
    <ul>
      {photos.map((thumbnail, index) => {
        return (<li className="thumbnail-list" key={index}>
          <img src={thumbnail.thumbnail_url} alt="thumbnail" className={index === currentPhoto ? "current-thumbnail thumbnail " : "thumbnail"} />
        </li>
        )
      })}
    </ul>
  )
}

export default VerticalThumbnails;