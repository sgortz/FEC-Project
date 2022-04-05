import React, { useState } from 'react';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import './ImageGallery.css';
import VerticalThumbnails from './VerticalThumbnails.jsx'

const ImageGallery = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const length = photos.length;

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1)
  }

  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1)
  }

  return (

    <section className="photos">
      <VerticalThumbnails photos={photos} currentPhoto={currentPhoto}/>
      <HiOutlineArrowSmLeft
        className="left-arrow"
        onClick={prevPhoto} />
      <HiOutlineArrowSmRight
        className="right-arrow"
        onClick={nextPhoto} />

        {photos.map((photo, i) => {
          return (
            <div className={i === currentPhoto ? "style active" : "style"} key={i}>
              {i === currentPhoto && (
                <img src={photo.url} className="image" />
              )}
            </div>
          )
        }
        )}
    </section>
  )
}

export default ImageGallery;