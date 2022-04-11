import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const ProductDescription = ({ features }) => {
  if (features === undefined) {
    return null;
  } else {
    return (
      <div className="about-style">
        <p className="product-slogan">{features.slogan}</p>
        <p className="product-description">{features.description}</p>
        <hr className="divider" />
        <ul className="clothes-features">

          {features.features.map((feature, index) => {
            return (
              <li key={index} >
                <FiCheck />   {feature.feature}: {feature.value}
              </li>
            )
          })}
          <li>

            <span className="social-media">
              <a href="#"><BsInstagram /></a>
              <a href="#"><BsFacebook /></a>
              <a href="#"><BsTwitter /></a>
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default ProductDescription;