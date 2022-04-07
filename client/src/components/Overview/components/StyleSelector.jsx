import React from 'react';
import './StyleSelector.css';

const StyleSelector = (props) => {
  if (props.styles === undefined) {
    return null;
  } else {
    return (
      <>
        <div className="clothing-style">STYLE > {props.styles.results[0].name} </div>
        <br />
        {props.styles.results.map((style, index) => {
          return (<a href="#" key={index}><img className="style-circular-photo" src={style.photos[0].thumbnail_url} /></a>)
        })}
      </>
    )
  }
}
export default StyleSelector;