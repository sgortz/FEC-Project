import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props)=> {
  // console.log(props.styles.results[2].photos[1].url);
  return (
  <div>
    <img className='current-style' src={props.styles.results[0].photos[0].url}/>
  </div>
)}

export default ImageGallery;