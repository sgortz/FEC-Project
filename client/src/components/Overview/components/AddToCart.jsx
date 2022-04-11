import React, { useState, useEffect } from 'react';
import { BsStar, BsStarFill } from "react-icons/bs";
import QuantityOptions from './QuantityOptions.jsx'

const AddToCart = ({ data, stylesIndex }) => {
  const [sizeSelection, setSizeSelection] = useState(null);
  const [quantitySelection, setQuantitySelection] = useState(1);
  const [quantityOption, setQuantityOption] = useState(null);
  // const [purchaseDisabled, setPurchaseDisabled] = useState(true);
  const [star, setStar] = useState(0);
  const [addToBag, setAddToBag] = useState('ADD TO BAG')

  /* Managing duplicated data from API */
  let skusData = Object.values(data.results[stylesIndex].skus);
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

  // useEffect(() => {
  //   if (addToBag !== 'ADD TO BAG') {
  //     setTimeout(() => setButtonText('ADD TO BAG'), [1500])
  //   }
  // }, [addToBag])

  const setSize = (e) => {
    setSizeSelection(e.target.value);
    setQuantityOption(storageData[e.target.value] <= 15 ? storageData[e.target.value] : 15)
  }
  const setQuantity = (e) => {
    setQuantitySelection(e.target.value);
    setPurchaseDisabled(false);
  }

  const changeText = (text) => {
    setAddToBag(text);
    setTimeout(() => {
      setAddToBag('ADD TO BAG')
    }, [1000])
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
      <form className='add-to-cart-form'>
        <select id="select-size" name="size" onChange={setSize} >
          <option value="Select Size">SELECT SIZE</option>
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
          disabled={sizeSelection === null ? true : false}
          value="ADD TO CART"
          onClick={(e) => {
            e.preventDefault();
            changeText('Item added !');
          }}
        >{addToBag}</button>

        <button className={star === 0 ? "starred" : "starred hidden"} onClick={toggleStar}>
        <BsStar />
        </button>
        <button className={star === 1 ? "starred" : "starred hidden"} onClick={toggleStar}>
        <BsStarFill />
        </button>
      </form>
    </div>
  )
}

export default AddToCart;