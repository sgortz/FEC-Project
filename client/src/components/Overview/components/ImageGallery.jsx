import React, { useState } from 'react';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import './ImageGallery.css';
import VerticalThumbnails from './VerticalThumbnails.jsx'

const ImageGallery = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const length = photos.results.length;

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1)
  }

  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1)
  }

  return (

    <section className="photos">
      <ul>
        <VerticalThumbnails photos={photos.results[0].photos} currentPhoto={currentPhoto} />
      </ul>
      <HiOutlineArrowSmLeft
        className="left-arrow"
        onClick={prevPhoto} />
      <HiOutlineArrowSmRight
        className="right-arrow"
        onClick={nextPhoto} />

      {photos.results[0].photos.map((photo, i) => {
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