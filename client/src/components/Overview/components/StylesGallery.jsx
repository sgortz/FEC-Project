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
      <div>
        <ImageGallery photos={styles[currentStyleIndex]} />
        <div className="clothing-style">
              STYLE > {styles[currentStyleIndex].name}
        </div>
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
    )
  }
}