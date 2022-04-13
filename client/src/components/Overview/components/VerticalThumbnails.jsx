import React from 'react';

const VerticalThumbnails = ({ photos, currentPhoto, changeIndex }) => {
  return (
    <ul>
      {photos.map((thumbnail, index) => {
        if (thumbnail.thumbnail_url !== null) {
          return (<li className="thumbnail-list" key={index}>
            <img src={thumbnail.thumbnail_url} alt="thumbnail" className={index === currentPhoto ? "current-thumbnail thumbnail " : "thumbnail"} onClick={(e) => { e.preventDefault(); changeIndex(index) }} />
          </li>
          )
        }
      })}
    </ul>
  )
}

export default VerticalThumbnails;