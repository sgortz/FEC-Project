import React, { useState } from 'react';
import { BsStar, BsStarFill } from "react-icons/bs";
import QuantityOptions from './QuantityOptions.jsx'
import './AddToCart.css';

const AddToCart = ({ data }) => {
  /* Which size user selected */
  const [sizeSelection, setSizeSelection] = useState(null);
  /* Quantity user selected */
  const [quantitySelection, setQuantitySelection] = useState(1);
  /* Quantity available in sotrage */
  const [quantityOption, setQuantityOption] = useState(null);
  const [purchaseDisabled, setPurchaseDisabled] = useState(true);
  const [star, setStar] = useState(0);

  /* Managing duplicated data from API */
  let skusData = Object.values(data.results[0].skus);
  let productSizes = [];
  let storageData = {};

  skusData.forEach((sku, index) => {
    if (productSizes.includes(sku.size)) {
      storageData[sku.size] += sku.quantity
    } else {
      productSizes.push(sku.size);
      storageData[sku.size] = sku.quantity;
    }
  })

  const setSize = (e) => {
    setSizeSelection(e.target.value);
    setQuantityOption(storageData[e.target.value] <= 15 ? storageData[e.target.value] : 15)
  }
  const setQuantity = (e) => {
    setQuantitySelection(e.target.value);
    setPurchaseDisabled(false);
  }

  const toggleStar = (e) => {
    e.preventDefault();
    if (star === 0) {
      setStar(1);
    } else {
      setStar(0);
    }
  }

  return (
    <div>
      <form>
        <select id="select-size" name="size" onChange={setSize} >
          <option value="Select-Size">SELECT SIZE</option>
          {productSizes.map((size, index) => {
            return (<option value={size} key={index}>{size}</option>)
          })}
        </select>
        <select
          id="quantity"
          name="quantity"
          disabled={sizeSelection === null ? true : false}
          onChange={setQuantity} >

          <QuantityOptions quantityOption={quantityOption} />
        </select>
        <button
          id="add-to-bag"
          disabled={purchaseDisabled}
          onClick={(e) => { e.preventDefault(); console.log('Added to bag!') }}
        > ADD TO BAG</button>

        <button className={star === 0 ? "starred" : "starred hidden"} onClick={toggleStar}> <BsStar /> </button>
        <button className={star === 1 ? "starred" : "starred hidden"} onClick={toggleStar}> <BsStarFill /> </button>
      </form>
    </div>
  )
}

export default AddToCart;