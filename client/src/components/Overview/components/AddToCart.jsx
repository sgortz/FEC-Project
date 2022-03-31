import React from 'react';

const AddToCart = () => (
  <div>
    <form>
      <select id="select-size" name="lunch">
        <option value="pizza">SELECT SIZE</option>
        <option value="curry">S</option>
        <option value="salad">M</option>
        <option value="ramen">L</option>
        <option value="tacos">XL</option>
      </select>
      <select id="quantity" name="lunch">
        <option value="pizza">1</option>
        <option value="curry">2</option>
        <option value="salad">3</option>
        <option value="ramen">4</option>
        <option value="tacos">5</option>
      </select>
      <button> ADD TO BAG</button>
      <button>*</button>


    </form>
  </div>
)

export default AddToCart;