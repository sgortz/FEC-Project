import React, { useState } from 'react';
import VerticalThumbnails from './VerticalThumbnails.jsx';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import './ImageGallery.css';

const ImageGallery = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [standardSize, setStandardSize] = useState('square-image');
  const length = photos.photos.length;

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1)
  }

  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1)
  }
  const changeIndex = (index) => {
    setCurrentPhoto(index)
  }

  const resizeImg = (img) => {
    if (img.height > img.width) {
      setStandardSize('portrait-image')
      img.height = 500;
    } else if (img.height < img.width) {
      setStandardSize('landscape-image')
      img.width = 700;
    }
  }

  return (
    <section className="photos">
      <VerticalThumbnails
        photos={photos.photos}
        currentPhoto={currentPhoto}
        changeIndex={changeIndex}
      />
      <HiOutlineArrowSmLeft
        className="left-arrow"
        onClick={prevPhoto} />
      <HiOutlineArrowSmRight
        className="right-arrow"
        onClick={nextPhoto} />
      <div className="horizontal-crousel">
        {photos.photos.map((photo, index) => {
          return (
            <div
              className={index === currentPhoto ? "style active" : "style"}
              key={index}
            >
              {index === currentPhoto && (
                <img src={photo.url} key={index}
                  onLoad={(e) => { resizeImg(e.target) }}
                  className={standardSize} />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ImageGallery;