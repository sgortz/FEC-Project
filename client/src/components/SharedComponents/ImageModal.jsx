import React, {useState, useEffect} from 'react';
import './ImageModal.css';


//eg. <ImageModal url={...}/>

function ImageModal (props) {

  const[openPhoto, setOpenPhoto] = useState(false);

  const handleClickPhoto = () => {
    setOpenPhoto(!openPhoto);
  }

  const PhotoModal= (
  <div className='PhotoModel'>
    <span className='PhotoCloseBtn' onClick={handleClickPhoto}>&times;</span>
    <img className='PhotoFZ' src={props.url}></img>
  </div>
)

  return (
    <div>
      <img className='thumbnailPhoto' src={props.url} onClick={handleClickPhoto} ></img>
      {openPhoto? PhotoModal : null}

    </div>



  )
};

export default ImageModal;

