import React from 'react';

const VerticalThumbnails = ({ photos, currentPhoto, handleMyself}) => {
  return (
    <ul>
      {photos.map((thumbnail, index) => {
        return (<li className="thumbnail-list" key={index}>
          <img src={thumbnail.thumbnail_url} alt="thumbnail" className={index === currentPhoto ? "current-thumbnail thumbnail " : "thumbnail"} onClick={(e)=>{e.preventDefault(); handleMyself(index)}}/>
        </li>
        )
      })}
    </ul>
  )
}

export default VerticalThumbnails;