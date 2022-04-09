import React from 'react';
import './ProductDescription.css';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const ProductDescription = ({ features }) => {
  if (features === undefined) {
    return null;
  } else {
    return (
      <div className="about-style">
        <p className="product-slogan">{features.slogan}</p>
        <p className="product-description">{features.description}</p>
        <hr className="divider" />
        {features.features.map((feature, index) => {
          return (
            <p className="clothes-features" key={index} >
              {feature.feature}: {feature.value}
            </p>
          )
        })}
        <span className="social-media">
          <a href="#"><BsInstagram /></a>
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsTwitter /></a>
        </span>
      </div>
    )
  }
}

export default ProductDescription;