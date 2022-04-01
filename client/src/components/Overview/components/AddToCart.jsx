import React from 'react';
import './AddToCart.css';

const AddToCart = (props) => {
  // console.log(props.styles.results);
  return (
  <div>
    <form>
      <select id="select-size" name="size">
        <option value="Select-Size">SELECT SIZE</option>
        <option value="S">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <select id="quantity" name="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button id="add-to-bag"> ADD TO BAG</button>
      <button id="starred">*</button>
    </form>
  </div>
)}

export default AddToCart;

/**HIGH LEVEL STRATEGY FOR THIS COMPONENT
 *
 * 1. Need to iterate over the results array to get access to the style's id
 * 2. Go iterate through the SKUS object to populate the components with
 *
 */