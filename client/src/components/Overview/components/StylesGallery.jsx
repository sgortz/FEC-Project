import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';

export default function StylesGallery({ styles, category, handleClick, stylesIndex }) {
  // const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  if (styles === undefined && category === undefined && stylesIndex === undefined) {
    return null;
  } else {
    return (
      <div className="style-gallery">
        <div className="clothing-style">
          <span className="product-category">{category}: </span>
           {styles[stylesIndex].name}
        </div>
        <div className="styles-options">

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