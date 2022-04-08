import React, { useState } from 'react';
import VerticalThumbnails from './VerticalThumbnails.jsx';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import './ImageGallery.css';

const ImageGallery = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [squarePhoto, setSquarePhoto] = useState(0);
  const length = photos.photos.length;

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1)
  }

  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1)
  }

  return (
    <section className="photos">
      <VerticalThumbnails
        photos={photos.photos}
        currentPhoto={currentPhoto}
      />
      <HiOutlineArrowSmLeft
        className="left-arrow"
        onClick={prevPhoto} />
      <HiOutlineArrowSmRight
        className="right-arrow"
        onClick={nextPhoto} />
      {photos.photos.map((photo, index) => {
        return (
          <div
            className={index === currentPhoto ? "style active" : "style"}
            key={index}
          >
            {index === currentPhoto && (
              <img src={photo.url} key={index} className="image" />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageGallery;