import React, { useState } from 'react';
import VerticalThumbnails from './VerticalThumbnails.jsx';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';

const ImageGallery = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [standardSize, setStandardSize] = useState('square-image');
  const length = photos.photos.length;

  const nextPhoto = (e) => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1);
    resizeImg(e.target);
  }

  const prevPhoto = (e) => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1);
    resizeImg(e.target);
  }
  const changeIndex = (index) => {
    setCurrentPhoto(index)
  }

  const resizeImg = (img) => {
    if (img.height > img.width) {
      setStandardSize('portrait-image')
    } else if (img.height < img.width) {
      setStandardSize('landscape-image')
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