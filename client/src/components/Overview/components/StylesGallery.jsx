import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';

export default function StylesGallery({ styles }) {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentStyleIndex(e.target.attributes[2].value)
  }

  if (styles === undefined) {
    return null;
  } else {
    return (
      <div className="style-gallery">
         <div className="images-everywhere">
        {/* <ImageGallery photos={styles[currentStyleIndex]} /> */}

         </div>
        <div className="clothing-style">
              STYLE > {styles[currentStyleIndex].name}
        </div>
        <div className="funny-guy">

          {styles.map((style, index) => {
            return (
              <StyleSelector
                key={index}
                index={index}
                style={style}
                handleClick={handleClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}